import { motion } from 'framer-motion';
import Button from './button/Button';
import CloseIcon from '@/icon/CloseIcon';

const DialogBox = ({ isOpen, onClose, children }) => {
  // Framer Motion variants for animation
  const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const dialogVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: '-100px' },
  };

  return (
    <>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-50"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
          //   onClick={onClose} // Close dialog when backdrop is clicked
        >
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()} // Prevent click propagation to backdrop
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={dialogVariants}
          >
            <div className="absolute flex items-center justify-center rounded-full shrink-0 w-5 aspect-square top-1 right-1">
              <Button noClass icon={<CloseIcon />} onClick={onClose} />
            </div>
            {/* <Button noClass icon={<Clse} /> */}
            {children}
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default DialogBox;
