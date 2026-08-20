import { useState } from 'react';
import { motion } from 'framer-motion';
import { CircleCheckBig, CircleAlert } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import api from '../utils/api';

const classOptions = ['Nursery', 'LKG', 'UKG', 'Class I', 'Class II', 'Class III', 'Class IV', 'Class V', 'Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X'];

const initialForm = {
  parentName: '',
  studentName: '',
  className: '',
  phone: '',
  email: '',
  message: '',
};

const Admissions = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      await api.post('/enquiries', { ...form, type: 'Admission Enquiry' });
      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout title="Admissions" description="Apply for admission at Mount Carmel School. Fill out the enquiry form and our team will get in touch with you.">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Admissions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white/80 text-base md:text-lg max-w-2xl mx-auto"
          >
            Begin your child's journey at Mount Carmel School.
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="max-w-3xl mx-auto px-4">
          <SectionTitle
            subtitle="Get Started"
            title="Admission Enquiry"
            description="Fill out the form below and our team will contact you with further details."
          />

          <Card className="p-6 md:p-10 mt-8">
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 bg-green-50 text-green-700 p-4 rounded-lg mb-6"
              >
                <CircleCheckBig size={20} />
                <span className="text-sm font-medium">Your enquiry has been submitted successfully. We will get back to you soon.</span>
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 bg-red-50 text-red-700 p-4 rounded-lg mb-6"
              >
                <CircleAlert size={20} />
                <span className="text-sm font-medium">Something went wrong. Please try again later.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">Parent's Name *</label>
                  <input type="text" name="parentName" value={form.parentName} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="Enter parent's name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">Student's Name *</label>
                  <input type="text" name="studentName" value={form.studentName} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="Enter student's name" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">Class *</label>
                  <select name="className" value={form.className} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white">
                    <option value="">Select class</option>
                    {classOptions.map((cls) => (
                      <option key={cls} value={cls}>{cls}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">Phone Number *</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="Enter phone number" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">Email Address</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="Enter email address" />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none" placeholder="Any specific questions or requirements?" />
              </div>

              <button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed">
                {loading ? 'Submitting...' : 'Submit Enquiry'}
              </button>
            </form>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
};

export default Admissions;
