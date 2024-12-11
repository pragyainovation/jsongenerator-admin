import { THUNK_NAME } from '@/constant/common/asyncThunkName';
const { SLICE_NAME } = require('@/constant/common/sliceName');
import {
  handleAsyncState,
  handleAsyncThunk,
  getInitState,
  setNestedValue,
} from '@/utils/helper';
import { createSlice } from '@reduxjs/toolkit';

const initialState = getInitState({});

export const createNotification = handleAsyncThunk({
  thunkName: THUNK_NAME.CREATE_NOTIFICATION,
  apiName: 'create',
  module: 'notification',
  commonAPI: true,
});

export const getNotificationlist = handleAsyncThunk({
  thunkName: THUNK_NAME.LIST_NOTIFICATION,
  apiName: 'list',
  module: 'notification',
  commonAPI: true,
});

export const updateNotification = handleAsyncThunk({
  thunkName: THUNK_NAME.UPDATE_NOTIFICATION,
  apiName: 'update',
  module: 'notification',
  commonAPI: true,
});

export const deleteNotification = handleAsyncThunk({
  thunkName: THUNK_NAME.DELETE_NOTIFICATION,
  apiName: 'delete',
  module: 'notification',
  commonAPI: true,
});

export const pushNotification = handleAsyncThunk({
  thunkName: THUNK_NAME.PUSH_NOTIFICATION,
  apiName: 'pushNotification',
});

const notificationSlice = createSlice({
  name: SLICE_NAME.NOTIFICATION,
  initialState,
  reducers: {
    setNotificationData: (state, action) => {
      const { key, value, name } = action.payload;

      if (key && value) {
        // Use helper function to set nested value
        setNestedValue(state.data, key, value);
      } else if (name && value) {
        // For simple key-value updates
        state.data[name] = value;
      }
    },
  },
  extraReducers: (builder) => {
    handleAsyncState(builder, createNotification, true);

    handleAsyncState(builder, getNotificationlist, true);

    handleAsyncState(builder, updateNotification, true);

    handleAsyncState(builder, deleteNotification, true);

    handleAsyncState(builder, pushNotification, true);
  },
});

export const notificationData = (state) => state[SLICE_NAME.NOTIFICATION];

export default notificationSlice.reducer;

export const { setNotificationData } = notificationSlice.actions;
