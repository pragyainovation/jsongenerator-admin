import { config } from '@/config/config';

export const sessionOptions = {
  cookieName: 'jsongenerator-admin',
  password: config.SESSION_SECRET, // Secure password for encryption
  ttl: 86400, // 1 day
  cookieOptions: {
    secure: config.NODE_MODE === 'production', // Secure cookies in production
  },
};
