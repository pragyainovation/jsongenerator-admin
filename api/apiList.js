const apiList = {
  userRegister: {
    url: () => `/admin/auth/register`,
    method: 'POST',
  },
  userLogin: {
    url: () => `/admin/auth/login`,
    method: 'POST',
  },
  verifyOtp: {
    url: () => `/admin/auth/verify-otp`,
    method: 'POST',
  },
  userNameVerify: {
    url: () => `/admin/auth/username-verify`,
    method: 'POST',
  },
  userForgotPass: {
    url: () => `/admin/auth/forgot-password`,
    method: 'POST',
  },
  userResetPassword: {
    url: () => `/admin/auth/reset-password`,
    method: 'POST',
  },

  // analytic
  analytics: {
    url: () => `/admin/analytics/all-analytics`,
    method: 'POST',
  },

  // profile
  updatePassword: {
    url: () => `/admin/user/update-password`,
    method: 'PUT',
  },
  updateProfile: {
    url: () => `/admin/user/profile-update`,
    method: 'PUT',
  },

  // ticket
  closedTicket: {
    url: ({ params }) => `/admin/ticket/close-ticket/${params}`,
    method: 'PUT',
  },
};

const commonApiList = {
  list: {
    url: ({ module }) => `/admin/${module}/list`,
    method: 'POST',
  },
  get: {
    url: ({ module, params }) => `/admin/${module}/${params}`,
    method: 'GET',
  },
  create: {
    url: ({ module }) => `/admin/${module}/create`,
    method: 'POST',
  },
  update: {
    url: ({ module, params }) => `/admin/${module}/update/${params}`,
    method: 'PUT',
  },
  delete: {
    url: ({ module, params }) => `/admin/${module}/delete/${params}`,
    method: 'DELETE',
  },
  softDelete: {
    url: ({ module, params }) => `/admin/${module}/softDelete/${params}`,
    method: 'PUT',
  },
};

export { apiList, commonApiList };
