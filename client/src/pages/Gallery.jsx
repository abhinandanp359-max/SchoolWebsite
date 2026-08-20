import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import SectionTitle from '../components/ui/SectionTitle';

const allImages = [
  { src: '/images/campus/campus01.webp', alt: 'School Campus', category: 'Campus' },
  { src: '/images/campus/campus02.webp', alt: 'Campus Building', category: 'Campus' },
  { src: '/images/campus/campus03.webp', alt: 'Campus Grounds', category: 'Campus' },
  { src: '/images/events/events01.webp', alt: 'School Event', category: 'Events' },
  { src: '/images/events/events02.webp', alt: 'Celebration', category: 'Events' },
  { src: '/images/events/events03.webp', alt: 'Cultural Program', category: 'Events' },
  { src: '/images/events/events04.webp', alt: 'Annual Day', category: 'Events' },
  { src: '/images/events/events05.webp', alt: 'Sports Day', category: 'Events' },
  { src: '/images/events/events06.webp', alt: 'Festival Celebration', category: 'Events' },
  { src: '/images/events/events07.webp', alt: 'Prize Distribution', category: 'Events' },
  { src: '/images/events/events08.webp', alt: 'School Function', category: 'Events' },
  { src: '/images/yoga/yoga.webp', alt: 'Yoga Session', category: 'Yoga' },
  { src: '/images/yoga/yoga01.webp', alt: 'Yoga Practice', category: 'Yoga' },
  { src: '/images/yoga/yoga02.webp', alt: 'Yoga Exercise', category: 'Yoga' },
  { src: '/images/yoga/yoga03.webp', alt: 'Yoga Day', category: 'Yoga' },
  { src: '/images/yoga/yoga04.webp', alt: 'Yoga Activity', category: 'Yoga' },
  { src: '/images/yoga/yoga05.webp', alt: 'Yoga Training', category: 'Yoga' },
  { src: '/images/yoga/yoga06.webp', alt: 'Meditation', category: 'Yoga' },
  { src: '/images/yoga/yoga07.webp', alt: 'Yoga Class', category: 'Yoga' },
  { src: '/images/yoga/yoga08.webp', alt: 'Mindfulness', category: 'Yoga' },
  { src: '/images/yoga/yoga09.webp', alt: 'Yoga Workshop', category: 'Yoga' },
  { src: '/images/yoga/yoga10.webp', alt: 'Student Yoga', category: 'Yoga' },
  { src: '/images/yoga/yoga11.webp', alt: 'Group Yoga', category: 'Yoga' },
  { src: '/images/yoga/yoga12.webp', alt: 'Yoga Camp', category: 'Yoga' },
  { src: '/images/yoga/yoga13.webp', alt: 'Wellness Program', category: 'Yoga' },
  { src: '/images/independence/inde01.webp', alt: 'Independence Day', category: 'Activities' },
  { src: '/images/events/dance01.webp', alt: 'Dance Performance', category: 'Activities' },
  { src: '/images/students/students01.webp', alt: 'Students', category: 'Activities' },
  { src: '/images/students/students02.webp', alt: 'Students Group', category: 'Activities' },
  { src: '/images/events/events03.webp', alt: 'Student Activity', category: 'Activities' },
];

const categories = ['All', 'Campus', 'Events', 'Yoga', 'Activities'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const filteredImages = activeCategory === 'All' ? allImages : allImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const prevImage = () => setCurrentImage((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  const nextImage = () => setCurrentImage((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));

  return (
    <PageLayout title="Gallery" description="Browse photos of campus life, events, yoga sessions, and activities at Mount Carmel School.">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Photo Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white/80 text-base md:text-lg max-w-2xl mx-auto"
          >
            A glimpse into life at Mount Carmel School.
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            subtitle="Gallery"
            title="Our Photo Gallery"
            description="Moments captured from campus life, events, and celebrations."
          />

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-8 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeCategory === cat ? 'bg-primary text-white shadow-md' : 'bg-white text-charcoal hover:bg-primary/10 hover:text-primary'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            <AnimatePresence>
              {filteredImages.map((img, i) => (
                <motion.div
                  key={img.src + img.category}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-lg overflow-hidden cursor-pointer shadow-md"
                  onClick={() => openLightbox(i)}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-40 md:h-52 object-cover" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredImages.length === 0 && (
            <p className="text-center text-warm-gray text-sm py-12">No images found in this category.</p>
          )}
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
              src={filteredImages[currentImage].src}
              alt={filteredImages[currentImage].alt}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-4 text-white/60 text-sm">
              {filteredImages[currentImage].alt} — {currentImage + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
};

export default Gallery;
