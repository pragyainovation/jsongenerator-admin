import { SLICE_NAME } from './sliceName';

export const THUNK_NAME = {
  // auth
  REGISTER: `${SLICE_NAME.REGISTER}/submit`,
  LOGIN: `${SLICE_NAME.LOGIN}/submit`,

  //analytics
  ANALYTICS: `${SLICE_NAME.ANALYTICS}/getData`,
  
  // users
  LIST_USERS: `${SLICE_NAME.USERS}/list`,
  UPDATE_USERS: `${SLICE_NAME.USERS}/update`,

    // roles
    LIST_ROLES: `${SLICE_NAME.ROLES}/list`,
    UPDATE_ROLES: `${SLICE_NAME.ROLES}/update`,

    // permission
    LIST_PERMISSION: `${SLICE_NAME.PERMISSION}/list`,

  // profile
  UPDATE_PROFILE: `${SLICE_NAME.PROFILE}/updateProfile`,
  UPDATE_PASSWORD: `${SLICE_NAME.PROFILE}/updatePassword`,

  // donation
  LIST_DONATION: `${SLICE_NAME.DONATION}/list`,
  UPDATE_DONATION: `${SLICE_NAME.DONATION}/update`,

  //contact
  LIST_TICKET: `${SLICE_NAME.TICKET}/list`,
  CLOSED_TICKET: `${SLICE_NAME.TICKET}/closeTicket`,
};