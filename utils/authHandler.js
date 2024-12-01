// utils/authHandler.js
import route from '@/route/routes';
import { getSession } from './helper';

export const authHandler = async ({ req, res }) => {
  const session = await getSession(req, res);
  const { user, token } = session || {};

  if (!(token && user)) {
    return {
      redirect: {
        destination: route.login,
        permanent: false,
      },
    };
  }

  return {
    props: { user },
  };
};

export const authHomePageHandler = async ({ req, res }) => {
  const session = await getSession(req, res);
  const { user, token } = session || {};

  if (!(token && user)) {
    return {
      redirect: {
        destination: route.login,
        permanent: false,
      },
    };
  }
  if (token && user) {
    return {
      redirect: {
        destination: route.dashboard,
        permanent: false,
      },
    };
  }

  return {
    props: { user },
  };
};

export const authPageHandler = async ({ req, res }) => {
  const session = await getSession(req, res);
  const { token, user } = session || {};

  if (token && user) {
    return {
      redirect: {
        destination: route.dashboard,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
