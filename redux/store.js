import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '@/redux/slice/themeSlice';
import registerReducer from '@/redux/slice/registerSlice';
import loginReducer from '@/redux/slice/loginSlice';
import userReducer from '@/redux/slice/usersSlice';
import analyticsReducer from '@/redux/slice/analyticsSlice';
import profileReducer from '@/redux/slice/profileSlice';
import donationReducer from '@/redux/slice/donationSlice';
import ticketReducer from '@/redux/slice/ticketSlice';
import rolesReducer from '@/redux/slice/rolesSlice';
import permissionReducer from '@/redux/slice/permissionSlice';
import metricsReducer from '@/redux/slice/metricsSlice';
import { SLICE_NAME } from '@/constant/common/sliceName';

const store = configureStore({
  reducer: {
    [SLICE_NAME.THEME]: themeReducer,
    [SLICE_NAME.REGISTER]: registerReducer,
    [SLICE_NAME.LOGIN]: loginReducer,
    [SLICE_NAME.USERS]: userReducer,
    [SLICE_NAME.ANALYTICS]: analyticsReducer,
    [SLICE_NAME.PROFILE]: profileReducer,
    [SLICE_NAME.DONATION]: donationReducer,
    [SLICE_NAME.TICKET]: ticketReducer,
    [SLICE_NAME.ROLES]: rolesReducer,
    [SLICE_NAME.PERMISSION]: permissionReducer,
    [SLICE_NAME.METRICS]: metricsReducer,
  },
});

export default store;
