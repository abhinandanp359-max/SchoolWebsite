import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Newspaper, FileText } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import api from '../utils/api';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await api.get('/news');
        setNews(Array.isArray(data) ? data : data.news || []);
      } catch {
        setError('Failed to load news. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <PageLayout title="News & Notices" description="Stay updated with the latest news and notices from Mount Carmel School.">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl md:text-5xl font-bold text-white mb-4"
          >
            News & Notices
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white/80 text-base md:text-lg max-w-2xl mx-auto"
          >
            Stay informed with the latest updates from our school.
          </motion.p>
        </div>
      </section>

      {/* News List */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle
            subtitle="Updates"
            title="Latest News"
            description="Important announcements and news from Mount Carmel School."
          />

          {loading && <LoadingSpinner />}

          {error && (
            <div className="text-center py-12">
              <p className="text-red-500 text-sm">{error}</p>
            </div>
          )}

          {!loading && !error && news.length === 0 && (
            <div className="text-center py-16">
              <Newspaper size={48} className="text-warm-gray/40 mx-auto mb-4" />
              <p className="text-warm-gray text-sm">No news items available at the moment.</p>
            </div>
          )}

          {!loading && !error && news.length > 0 && (
            <div className="space-y-6 mt-8">
              {news.map((item, i) => (
                <motion.div
                  key={item._id || i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Card className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                        <Newspaper size={22} className="text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-lg font-bold text-primary mb-1">{item.title}</h3>
                        {item.date && (
                          <p className="text-secondary text-xs font-semibold mb-2">{formatDate(item.date)}</p>
                        )}
                        <p className="text-warm-gray text-sm leading-relaxed">{item.description}</p>
                        {item.document && (
                          <a href={item.document} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-secondary text-sm font-medium mt-3 hover:underline">
                            <FileText size={14} />
                            View Document
                          </a>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default News;
