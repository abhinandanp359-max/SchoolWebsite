import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArrowRight from '../icons/ArrowRight';

const Button = ({ children, to, href, variant = 'primary', size = 'md', icon = false, className = '', ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300';

  const variants = {
    primary: 'bg-primary hover:bg-primary-dark text-white hover:shadow-lg',
    secondary: 'bg-secondary hover:bg-secondary-dark text-white hover:shadow-lg',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    'outline-light': 'border-2 border-white text-white hover:bg-white hover:text-primary'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base'
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {icon && <ArrowRight size={16} />}
    </>
  );

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link to={to} className={classes} {...props}>{content}</Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <a href={href} className={classes} {...props}>{content}</a>
      </motion.div>
    );
  }

  return (
    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={classes} {...props}>
      {content}
    </motion.button>
  );
};

export default Button;
