import { THUNK_NAME } from '@/constant/common/asyncThunkName';
const { SLICE_NAME } = require('@/constant/common/sliceName');
import { handleAsyncState, handleAsyncThunk, getInitState, clearInitState } from '@/utils/helper';
import { createSlice } from '@reduxjs/toolkit';

const initialState = getInitState({});

export const updatePassword = handleAsyncThunk({
  thunkName: THUNK_NAME.UPDATE_PROFILE,
  apiName: 'updatePassword',
});

export const updateProfile = handleAsyncThunk({
  thunkName: THUNK_NAME.UPDATE_PASSWORD,
  apiName: 'updateProfile',
});

const profileSlice = createSlice({
  name: SLICE_NAME.PROFILE,
  initialState,
  reducers: {
    setProfileData: (state, action) => {
      state.data = action.payload;
    },
    resetProfileData: () => clearInitState,
  },
  extraReducers: (builder) => {
    handleAsyncState(builder, updateProfile, true);

    handleAsyncState(builder, updatePassword);
  },
});

export const profileData = (state) => state[SLICE_NAME.PROFILE];

export default profileSlice.reducer;

export const { setProfileData, resetProfileData } = profileSlice.actions;
