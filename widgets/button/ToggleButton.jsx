import { SLICE_NAME } from '@/constant/common/sliceName';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

function ToggleButton({
  onClick,
  label,
  offInside,
  onInside,
  labelColor,
  initialState,
}) {
  const isDark = useSelector((state) => state[SLICE_NAME.THEME].isDark);
  const [isOn, setIsOn] = useState(initialState || false);

  const handleToggle = () => {
    setIsOn(!isOn);
    if (onClick) {
      onClick(isOn);
    }
  };

  return (
    <div className="shrink-0 flex items-center gap-1 flex-col">
      <button
        onClick={handleToggle}
        className={`p-1 w-14 rounded-full flex cursor-pointer border-2 items-center gap-2 
                    ${isDark ? (isOn ? 'bg-secondary' : 'bg-gray4') : isOn ? 'bg-secondary border-black' : 'bg-gray4 border-black'}`}
      >
        <motion.div
          className={`cursor-pointer text-sm ${isOn ? 'block' : 'hidden'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOn ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {onInside ? onInside : 'on'}
        </motion.div>

        <motion.div
          className="w-5 h-5 rounded-full bg-white shadow-md"
          layout
          transition={{ type: 'spring', stiffness: 700, damping: 30 }}
        />

        <motion.div
          className={`cursor-pointer text-sm ${isOn ? 'hidden' : 'block'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOn ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        >
          {offInside ? offInside : 'off'}
        </motion.div>
      </button>

      {label && (
        <label
          className={`cursor-pointer text-sm ${labelColor ? labelColor : !isDark && 'text-secondary'}`}
        >
          {label}
        </label>
      )}
    </div>
  );
}

export default ToggleButton;
