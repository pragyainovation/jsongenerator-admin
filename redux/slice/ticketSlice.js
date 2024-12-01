import { THUNK_NAME } from '@/constant/common/asyncThunkName';
const { SLICE_NAME } = require('@/constant/common/sliceName');
import { handleAsyncState, handleAsyncThunk, getInitState, setNestedValue } from '@/utils/helper';
import { createSlice } from '@reduxjs/toolkit';

const initialState = getInitState({});

export const getTicketlist = handleAsyncThunk({
  thunkName: THUNK_NAME.LIST_TICKET,
  apiName: 'list',
  module: 'ticket',
  commonAPI: true,
});

export const closeTicket = handleAsyncThunk({
  thunkName: THUNK_NAME.CLOSED_TICKET,
  apiName: 'closedTicket',
});

const ticketSlice = createSlice({
  name: SLICE_NAME.TICKET,
  initialState,
  reducers: {
    setTicketData: (state, action) => {
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
    handleAsyncState(builder, getTicketlist);

    handleAsyncState(builder, closeTicket, true);
  },
});

export const ticketData = (state) => state[SLICE_NAME.TICKET];

export default ticketSlice.reducer;

export const { setTicketData } = ticketSlice.actions;
