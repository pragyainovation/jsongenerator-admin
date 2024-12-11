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

export const getPermissionList = handleAsyncThunk({
  thunkName: THUNK_NAME.LIST_PERMISSION,
  apiName: 'list',
  module: 'permission',
  commonAPI: true,
});

const permissionSlice = createSlice({
  name: SLICE_NAME.PERMISSION,
  initialState,
  reducers: {
    setPermissionData: (state, action) => {
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
    handleAsyncState(builder, getPermissionList);
  },
});

export const permissionData = (state) => state[SLICE_NAME.PERMISSION];

export default permissionSlice.reducer;

export const { setPermissionData } = permissionSlice.actions;
