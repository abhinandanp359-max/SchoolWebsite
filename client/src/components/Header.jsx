import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import useScrollPosition from '../hooks/useScrollPosition';
import { mainNav } from '../data/navigation';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const { isScrolled } = useScrollPosition();
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setHoveredItem(null);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2 md:gap-3 group min-w-0">
              <img src="/images/branding/logo.webp" alt="Mount Carmel School Logo" className="h-10 w-10 md:h-14 md:w-14 object-contain shrink-0" />
              <div className="min-w-0">
                <h1 className="text-primary font-heading text-base md:text-xl font-bold leading-tight group-hover:text-primary-dark transition-colors truncate">Mount Carmel</h1>
                <p className="text-secondary text-[10px] md:text-xs font-semibold tracking-widest uppercase">School</p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {mainNav.map((item) => (
                <div key={item.name} className="relative" onMouseEnter={() => item.children && setHoveredItem(item.name)} onMouseLeave={() => setHoveredItem(null)}>
                  <Link to={item.path} className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 rounded-md ${location.pathname === item.path ? 'text-primary bg-primary/5' : 'text-charcoal hover:text-primary hover:bg-primary/5'}`}>
                    {item.name}
                    {item.children && <ChevronDown size={14} className={`transition-transform ${hoveredItem === item.name ? 'rotate-180' : ''}`} />}
                  </Link>
                  <AnimatePresence>
                    {item.children && hoveredItem === item.name && (
                      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.15 }} className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[200px]">
                        {item.children.map((child) => (
                          <Link key={child.path} to={child.path} className="block px-4 py-2 text-sm text-charcoal hover:text-primary hover:bg-primary/5 transition-colors">{child.name}</Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-2 md:gap-3">
              <Link to="/admissions" className="hidden md:inline-flex bg-secondary hover:bg-secondary-dark text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:shadow-lg">Admissions</Link>
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-charcoal hover:text-primary rounded-lg" aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}>
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: 'easeInOut' }} className="lg:hidden overflow-hidden border-t border-gray-100">
              <nav className="bg-white px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
                {mainNav.map((item) => (
                  <div key={item.name}>
                    <Link to={item.path} onClick={() => setIsMobileMenuOpen(false)} className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${location.pathname === item.path ? 'text-primary bg-primary/5' : 'text-charcoal hover:text-primary hover:bg-primary/5'}`}>
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="pl-6">
                        {item.children.map((child) => (
                          <Link key={child.path} to={child.path} onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2.5 text-sm text-warm-gray hover:text-primary">{child.name}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link to="/admissions" onClick={() => setIsMobileMenuOpen(false)} className="block text-center bg-secondary text-white px-4 py-3 rounded-lg font-semibold text-sm mt-4">Admissions</Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
