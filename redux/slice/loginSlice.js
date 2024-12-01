import { THUNK_NAME } from '@/constant/common/asyncThunkName';
const { SLICE_NAME } = require('@/constant/common/sliceName');
import { handleAsyncState, handleAsyncThunk, getInitState, clearInitState } from '@/utils/helper';
import { createSlice } from '@reduxjs/toolkit';

const initialState = getInitState({});

export const loginUser = handleAsyncThunk({
  thunkName: THUNK_NAME.LOGIN,
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
    handleAsyncState(builder, loginUser, true);
  },
});

export const loginData = (state) => state[SLICE_NAME.LOGIN];

export default loginSlice.reducer;

export const { setLoginFormData, resetLoginForm } = loginSlice.actions;
