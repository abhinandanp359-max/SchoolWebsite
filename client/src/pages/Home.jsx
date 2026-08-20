import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, Heart, HandHeart, Award, Clock, ArrowRight } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import schoolInfo from '../data/schoolInfo';
import principalData from '../data/principalMessage';
import values from '../data/values';

const valueIcons = [Award, HandHeart, Heart, GraduationCap];

const milestones = [
  { year: '2004', title: 'Foundation', description: 'Established at Seemanagar with a vision for value-based education.' },
  { year: '2014', title: 'Decade of Growth', description: 'Ten years of nurturing students and building a strong community.' },
  { year: '2019', title: 'New Campus', description: 'Expanded to a new campus at Chapra, Srinagar More.' },
  { year: 'Present', title: 'Continuing Legacy', description: 'Serving the community with faith, values, and academic excellence.' },
];

const Home = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero/banner.webp" alt="Mount Carmel School Campus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-secondary/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 backdrop-blur-sm inline-block"
          >
            <span className="text-secondary text-sm md:text-base font-medium">Est. 2004 · Christian Missionary School</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Mount Carmel <span className="text-secondary">School</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-heading italic text-secondary text-xl md:text-2xl lg:text-3xl mb-6"
          >
            "Rooted in values, Reaching for Excellence"
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/90 text-sm md:text-base lg:text-lg mb-10 max-w-3xl mx-auto font-sans leading-relaxed"
          >
            A Christian missionary school dedicated to nurturing young minds with faith, values, academic excellence, and holistic development at our campus in Chapra.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button to="/about" variant="secondary" size="lg" icon>
              Explore Our School
            </Button>
            <Button to="/admissions" variant="outline-light" size="lg">
              Admissions
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            subtitle="Welcome"
            title="Welcome to Mount Carmel School"
            description="A Christian missionary school dedicated to nurturing young minds with values, knowledge, and compassion."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { title: 'Our Mission', text: 'To provide holistic education rooted in Christian values that empowers students to become compassionate, responsible, and excellent individuals.' },
              { title: 'Our Vision', text: 'To be a beacon of light in education, forming leaders who will transform society with integrity and service.' },
              { title: 'Our Promise', text: 'A nurturing environment where every child discovers their God-given potential and grows in confidence and character.' },
            ].map((item, i) => (
              <Card key={i} className="p-6 md:p-8 text-center">
                <h3 className="font-heading text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-warm-gray text-sm leading-relaxed">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* School Identity Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            subtitle="Our Identity"
            title={schoolInfo.name}
            description={schoolInfo.tagline}
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto">
            {[
              { label: 'School Type', value: schoolInfo.type },
              { label: 'Established', value: schoolInfo.established },
              { label: 'Location', value: schoolInfo.location },
              { label: 'Motto', value: 'Rooted in values, Reaching for Excellence' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center p-4 rounded-xl bg-ivory/50"
              >
                <p className="text-secondary text-xs font-semibold uppercase tracking-wider mb-1">{item.label}</p>
                <p className="font-heading text-lg font-bold text-primary">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            subtitle="Our Values"
            title="What We Stand For"
            description="Our core values guide everything we do at Mount Carmel School."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12">
            {values.map((value, i) => {
              const Icon = valueIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-xl p-6 md:p-8 text-center shadow-md"
                >
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon size={28} className="text-secondary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-2">{value.title}</h3>
                  <p className="text-warm-gray text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* History Timeline Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            subtitle="Our Journey"
            title="Milestones in Our History"
            description="From humble beginnings to a thriving institution of learning."
          />
          <div className="relative mt-12 max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-secondary/20 -translate-x-1/2" />
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-secondary border-4 border-white -translate-x-1/2 mt-1.5 z-10" />
                <div className="ml-10 md:ml-0 md:w-1/2">
                  <div className="bg-ivory/50 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock size={14} className="text-secondary" />
                      <span className="text-secondary font-semibold text-sm">{m.year}</span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-primary mb-1">{m.title}</h3>
                    <p className="text-warm-gray text-sm leading-relaxed">{m.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button to="/about/history" variant="outline" size="sm" icon>
              View Full History
            </Button>
          </div>
        </div>
      </section>

      {/* Campus Section */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            subtitle="Our Campus"
            title="A Place to Grow"
            description="Our campus at Chapra provides modern facilities in a serene environment."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {['/images/campus/campus01.webp', '/images/campus/campus02.webp', '/images/campus/campus03.webp'].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ scale: 1.03 }}
                className="rounded-xl overflow-hidden shadow-md"
              >
                <img src={src} alt={`Campus view ${i + 1}`} className="w-full h-64 object-cover" />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button to="/facilities" variant="outline" size="sm" icon>
              Explore Campus
            </Button>
          </div>
        </div>
      </section>

      {/* Principal Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-lg shrink-0"
            >
              <img src={principalData.image} alt={principalData.imageAlt} className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2">From the Principal's Desk</p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-2">{principalData.principalName}</h2>
              <p className="text-warm-gray text-sm mb-4">{principalData.designation}</p>
              <blockquote className="text-charcoal text-sm md:text-base leading-relaxed italic border-l-4 border-secondary pl-4 mb-6">
                "Rooted in values, Reaching for Excellence"
              </blockquote>
              <Button to="/about/principal-message" variant="outline" size="sm" icon>
                Read Full Message
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Begin Your Child's Journey
            </h2>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-8">
              Give your child the gift of value-based education at Mount Carmel School. Admissions are now open.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/admissions" variant="secondary" size="lg" icon>
                Apply Now
              </Button>
              <Button to="/contact" variant="outline-light" size="lg">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
