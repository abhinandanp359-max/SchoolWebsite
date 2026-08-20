import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, HandHeart, Palette, Music, Users, Leaf, Heart } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';

const activities = [
  { icon: HandHeart, title: 'Prayer & Worship', description: 'Daily prayers, weekly assemblies, and spiritual formation that nurture faith and community.' },
  { icon: Users, title: 'Sports & Games', description: 'Physical education, outdoor sports, and inter-school competitions promoting health and teamwork.' },
  { icon: Palette, title: 'Arts & Crafts', description: 'Creative expression through drawing, painting, and craft activities that develop imagination.' },
  { icon: Music, title: 'Cultural Programs', description: 'Festivals, cultural days, and annual celebrations that showcase talent and heritage.' },
  { icon: Heart, title: 'Community Service', description: 'Service projects and outreach programs that teach empathy and social responsibility.' },
  { icon: Leaf, title: 'Environmental Awareness', description: 'Tree planting, clean-up drives, and eco-clubs fostering care for creation.' },
  { icon: HandHeart, title: 'Yoga & Wellness', description: 'Yoga sessions and wellness activities promoting physical and mental well-being.' },
];

const yogaImages = [
  { src: '/images/yoga/yoga.webp', alt: 'Yoga Day Celebration 1' },
  { src: '/images/yoga/yoga01.webp', alt: 'Yoga Day Celebration 2' },
  { src: '/images/yoga/yoga02.webp', alt: 'Yoga Day Celebration 3' },
  { src: '/images/yoga/yoga03.webp', alt: 'Yoga Day Celebration 4' },
  { src: '/images/yoga/yoga04.webp', alt: 'Yoga Day Celebration 5' },
  { src: '/images/yoga/yoga05.webp', alt: 'Yoga Day Celebration 6' },
  { src: '/images/yoga/yoga06.webp', alt: 'Yoga Day Celebration 7' },
  { src: '/images/yoga/yoga07.webp', alt: 'Yoga Day Celebration 8' },
  { src: '/images/yoga/yoga08.webp', alt: 'Yoga Day Celebration 9' },
  { src: '/images/yoga/yoga09.webp', alt: 'Yoga Day Celebration 10' },
  { src: '/images/yoga/yoga10.webp', alt: 'Yoga Day Celebration 11' },
  { src: '/images/yoga/yoga11.webp', alt: 'Yoga Day Celebration 12' },
  { src: '/images/yoga/yoga12.webp', alt: 'Yoga Day Celebration 13' },
  { src: '/images/yoga/yoga13.webp', alt: 'Yoga Day Celebration 14' },
];

const Activities = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const prevImage = () => setCurrentImage((prev) => (prev === 0 ? yogaImages.length - 1 : prev - 1));
  const nextImage = () => setCurrentImage((prev) => (prev === yogaImages.length - 1 ? 0 : prev + 1));

  return (
    <PageLayout title="Activities" description="Explore co-curricular activities at Mount Carmel School - sports, arts, yoga, cultural programs, and more.">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Activities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white/80 text-base md:text-lg max-w-2xl mx-auto"
          >
            Beyond academics — nurturing talents, building character, and fostering joy.
          </motion.p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            subtitle="Co-Curricular"
            title="Our Activities"
            description="A wide range of activities that complement academic learning and develop the whole child."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
            {activities.map((activity, i) => {
              const Icon = activity.icon;
              return (
                <Card key={i} className="p-6">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-secondary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-primary mb-2">{activity.title}</h3>
                  <p className="text-warm-gray text-sm leading-relaxed">{activity.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Yoga Day Gallery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            subtitle="Photo Gallery"
            title="Yoga Day Celebrations"
            description="Our students embracing wellness and mindfulness through yoga."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mt-12">
            {yogaImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-lg overflow-hidden cursor-pointer shadow-md"
                onClick={() => openLightbox(i)}
              >
                <img src={img.src} alt={img.alt} className="w-full h-40 md:h-48 object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-4 right-4 text-white/80 hover:text-white z-10 p-2" aria-label="Close">
              <X size={28} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-2 md:left-6 text-white/80 hover:text-white z-10 p-2" aria-label="Previous">
              <ChevronLeft size={36} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-2 md:right-6 text-white/80 hover:text-white z-10 p-2" aria-label="Next">
              <ChevronRight size={36} />
            </button>
            <motion.img
              key={currentImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={yogaImages[currentImage].src}
              alt={yogaImages[currentImage].alt}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-4 text-white/60 text-sm">
              {currentImage + 1} / {yogaImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
};

export default Activities;
