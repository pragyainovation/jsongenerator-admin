import { STATUS } from '@/constant/common/constant';
import { toast } from 'react-toastify';

// Common toast function
const showToast = (message, type = 'success', position = 'top-center') => {
  // Default options for all toast types
  const defaultOptions = {
    position: position,
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  };

  // Check if the type is valid, fallback to 'success' if not
  const validTypes = [STATUS.ERROR, STATUS.SUCCESS, STATUS.INFO, STATUS.WARN];
  const toastType = validTypes.includes(type) ? type : STATUS.SUCCESS;

  // Dynamically call the appropriate toast method
  toast[toastType](message, defaultOptions);
};

export default showToast;
