import { THUNK_NAME } from '@/constant/common/asyncThunkName';
const { SLICE_NAME } = require('@/constant/common/sliceName');
import { handleAsyncState, handleAsyncThunk, getInitState, setNestedValue } from '@/utils/helper';
import { createSlice } from '@reduxjs/toolkit';

const initialState = getInitState({});

export const getDonationList = handleAsyncThunk({
  thunkName: THUNK_NAME.LIST_DONATION,
  apiName: 'list',
  module: 'payment',
  commonAPI: true,
});

const donationSlice = createSlice({
  name: SLICE_NAME.DONATION,
  initialState,
  reducers: {
    setDonationData: (state, action) => {
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
    handleAsyncState(builder, getDonationList);
  },
});

export const donationData = (state) => state[SLICE_NAME.DONATION];

export default donationSlice.reducer;

export const { setDonationData } = donationSlice.actions;
