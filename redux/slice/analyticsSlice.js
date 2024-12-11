import { THUNK_NAME } from '@/constant/common/asyncThunkName';
const { SLICE_NAME } = require('@/constant/common/sliceName');
import {
  handleAsyncState,
  handleAsyncThunk,
  getInitState,
} from '@/utils/helper';
import { createSlice } from '@reduxjs/toolkit';

const initialState = getInitState({});

export const getAnalytics = handleAsyncThunk({
  thunkName: THUNK_NAME.ANALYTICS,
  apiName: 'analytics',
});

const analyticsSlice = createSlice({
  name: SLICE_NAME.ANALYTICS,
  initialState,
  reducers: {
    setAnayticData: (state, action) => {
      state.data[action.payload.name] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    handleAsyncState(builder, getAnalytics, true);
  },
});

export const analyticsData = (state) => state[SLICE_NAME.ANALYTICS];

export default analyticsSlice.reducer;

export const { setAnayticData } = analyticsSlice.actions;
