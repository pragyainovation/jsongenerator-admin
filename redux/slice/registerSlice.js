import { THUNK_NAME } from '@/constant/common/asyncThunkName';
const { SLICE_NAME } = require('@/constant/common/sliceName');
import { handleAsyncState, handleAsyncThunk, getInitState, clearInitState } from '@/utils/helper';
const { createSlice } = require('@reduxjs/toolkit');

const initialState = getInitState({});

export const createUser = handleAsyncThunk({
  thunkName: THUNK_NAME.REGISTER,
  apiName: 'userRegister',
  auth: false,
});

const registerSlice = createSlice({
  name: SLICE_NAME.REGISTER,
  initialState,
  reducers: {
    setRegisterFormData: (state, action) => {
      state.data[action.payload.name] = action.payload.value;
    },
    resetRegisterForm: () => clearInitState,
  },
  extraReducers: (builder) => {
    // Handle createUser action
    handleAsyncState(builder, createUser);
  },
});

export const registerData = (state) => state[SLICE_NAME.REGISTER];

export default registerSlice.reducer;

export const { setRegisterFormData, resetRegisterForm } = registerSlice.actions;
