import { THUNK_NAME } from '@/constant/common/asyncThunkName';
const { SLICE_NAME } = require('@/constant/common/sliceName');
import {
  handleAsyncState,
  handleAsyncThunk,
  getInitState,
  clearInitState,
} from '@/utils/helper';
import { createSlice } from '@reduxjs/toolkit';

const initialState = getInitState({});

export const loginUser = handleAsyncThunk({
  thunkName: THUNK_NAME.LOGIN,
  apiName: 'userLogin',
  auth: false,
});

export const verifyOtp = handleAsyncThunk({
  thunkName: THUNK_NAME.OTP,
  apiName: 'verifyOtp',
  auth: false,
});

export const resendOtp = handleAsyncThunk({
  thunkName: THUNK_NAME.RESEND_OTP,
  apiName: 'userLogin',
  auth: false,
});

const loginSlice = createSlice({
  name: SLICE_NAME.LOGIN,
  initialState,
  reducers: {
    setLoginFormData: (state, action) => {
      state.data[action.payload.name] = action.payload.value;
    },
    resetLoginForm: () => clearInitState,
  },
  extraReducers: (builder) => {
    // Handle createUser action
    handleAsyncState(builder, loginUser);

    handleAsyncState(builder, verifyOtp, true);

    handleAsyncState(builder, resendOtp);
  },
});

export const loginData = (state) => state[SLICE_NAME.LOGIN];

export default loginSlice.reducer;

export const { setLoginFormData, resetLoginForm } = loginSlice.actions;
