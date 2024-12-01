import { THUNK_NAME } from '@/constant/common/asyncThunkName';
const { SLICE_NAME } = require('@/constant/common/sliceName');
import { handleAsyncState, handleAsyncThunk, getInitState, setNestedValue } from '@/utils/helper';
import { createSlice } from '@reduxjs/toolkit';

const initialState = getInitState({});

export const updateUser = handleAsyncThunk({
  thunkName: THUNK_NAME.UPDATE_USERS,
  apiName: 'update',
  module: 'user',
  commonAPI: true,
});

export const getUsersList = handleAsyncThunk({
  thunkName: THUNK_NAME.LIST_USERS,
  apiName: 'list',
  module: 'user',
  commonAPI: true,
});

const usersSlice = createSlice({
  name: SLICE_NAME.USERS,
  initialState,
  reducers: {
    setUserData: (state, action) => {
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
    handleAsyncState(builder, updateUser, true);

    handleAsyncState(builder, getUsersList);
  },
});

export const userData = (state) => state[SLICE_NAME.USERS];

export default usersSlice.reducer;

export const { setUserData } = usersSlice.actions;
