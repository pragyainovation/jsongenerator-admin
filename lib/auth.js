import { STATUS } from '@/constant/common/constant';
import { logout } from '@/utils/helper';
import showToast from '@/utils/showToast';

// lib/auth.js
export const fetchToken = async () => {
  try {
    const response = await fetch('/api/getToken', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!data?.token) {
      // Handle token expiration or failure
      await logout(); // Replace with your logout logic
      showToast('Token Expired. Logging out.', STATUS.WARN);
      return undefined;
    }
    return data.token;
  } catch (error) {
    console.error('Failed to fetch token:', error);
    showToast('Failed to fetch token.', STATUS.ERROR);
    return undefined;
  }
};
