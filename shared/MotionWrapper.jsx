// MotionWrapper.jsx
import { motion } from 'framer-motion';

const MotionWrapper = ({ children, animation, className }) => {
  const defaultAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3, ease: 'easeInOut' },
  };

  return (
    <motion.div
      className={className}
      {...(animation || defaultAnimation)} // Use custom animation if provided
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
