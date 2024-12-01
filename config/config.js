import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export const config = {
  TIMEZONE: publicRuntimeConfig.NEXT_PUBLIC_TIMEZONE,
  ROOT_API: publicRuntimeConfig.NEXT_PUBLIC_API,
  SESSION_SECRET: publicRuntimeConfig.NEXT_PUBLIC_SESSION_SECRET,
  NODE_MODE: publicRuntimeConfig.NEXT_PUBLIC_NODE_MODE,
};
