import { THUNK_NAME } from '@/constant/common/asyncThunkName';
const { SLICE_NAME } = require('@/constant/common/sliceName');
import { handleAsyncState, handleAsyncThunk, getInitState, setNestedValue } from '@/utils/helper';
import { createSlice } from '@reduxjs/toolkit';

const initialState = getInitState({});

export const getMetricsList = handleAsyncThunk({
  thunkName: THUNK_NAME.LIST_METRICS,
  apiName: 'list',
  module: 'metrics',
  commonAPI: true,
});

const metricsSlice = createSlice({
  name: SLICE_NAME.METRICS,
  initialState,
  reducers: {
    setMetricsData: (state, action) => {
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
    handleAsyncState(builder, getMetricsList);
  },
});

export const metricsData = (state) => state[SLICE_NAME.METRICS];

export default metricsSlice.reducer;

export const { setMetricsData } = metricsSlice.actions;
