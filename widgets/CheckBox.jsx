import { SLICE_NAME } from '@/constant/common/sliceName';
import CheckBoxOutLineIcon from '@/icon/CheckBoxOutLineIcon';
import CheckDeterminateBoxIcon from '@/icon/CheckDeterminateBoxIcon';
import CheckedBoxIcon from '@/icon/CheckedBoxIcon';
import CheckedRoundIcon from '@/icon/CheckedRoundIcon';
import CheckRoundOutLineIcon from '@/icon/CheckRoundOutLineIcon';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion'; // Import Framer Motion

function CheckBox({ label = 'Check me', labelClass = '', id = null, checked = false, onChange, className = '', isRounded = false, isPartial = false, disabled = false }) {
  const isDark = useSelector((state) => state[SLICE_NAME.THEME].isDark);

  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
    if (onChange) {
      onChange(event.target.checked); // Call the onChange prop if provided
    }
  };

  // Handle icon click to trigger checkbox change
  const handleIconClick = () => {
    setIsChecked((prevChecked) => !prevChecked);
    if (onChange) {
      onChange(!isChecked); // Toggle the checked state and call onChange
    }
  };

  return (
    <div className={`flex items-center gap-2 shrink-0 ${className}`}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        id={id ?? 'custom-checkbox'}
        className="hidden" // Hide the checkbox visually
      />
      <div className="flex items-center gap-2 cursor-pointer">
        <motion.div
          className="w-5 aspect-square flex justify-center items-center"
          htmlFor={id ?? 'custom-checkbox'}
          onClick={() => !disabled && handleIconClick} // Make the icon clickable
          initial={{ opacity: 0 }} // Start with 0 opacity
          animate={{ opacity: 1 }} // Animate to full opacity
          transition={{ duration: 0.5 }} // Smooth transition
        >
          {isChecked ? isRounded ? <CheckedRoundIcon iconClass="hover:text-secondary" /> : isPartial ? <CheckDeterminateBoxIcon iconClass="hover:text-secondary" /> : <CheckedBoxIcon iconClass="hover:text-secondary" /> : isRounded ? <CheckRoundOutLineIcon iconClass="hover:text-secondary" /> : <CheckBoxOutLineIcon iconClass="hover:text-secondary" />}
        </motion.div>
        <motion.label
          htmlFor={id ?? 'custom-checkbox'}
          className={`cursor-pointer ${labelClass ? labelClass : !isDark && 'text-secondary'}`}
          initial={{ opacity: 0 }} // Start with 0 opacity
          animate={{ opacity: 1 }} // Animate to full opacity
          transition={{ duration: 0.5 }} // Smooth transition for label
        >
          {label}
        </motion.label>
      </div>
    </div>
  );
}

export default CheckBox;
