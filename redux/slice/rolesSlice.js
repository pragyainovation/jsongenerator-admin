import { THUNK_NAME } from '@/constant/common/asyncThunkName';
const { SLICE_NAME } = require('@/constant/common/sliceName');
import { handleAsyncState, handleAsyncThunk, getInitState, setNestedValue } from '@/utils/helper';
import { createSlice } from '@reduxjs/toolkit';

const initialState = getInitState({});

export const updateRoles = handleAsyncThunk({
  thunkName: THUNK_NAME.UPDATE_ROLES,
  apiName: 'update',
  module: 'roles',
  commonAPI: true,
});

export const getRolesList = handleAsyncThunk({
  thunkName: THUNK_NAME.LIST_ROLES,
  apiName: 'list',
  module: 'roles',
  commonAPI: true,
});

const rolesSlice = createSlice({
  name: SLICE_NAME.ROLES,
  initialState,
  reducers: {
    setRolesData: (state, action) => {
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

    handleAsyncState(builder, updateRoles, true);

    handleAsyncState(builder, getRolesList);
  },
});

export const rolesData = (state) => state[SLICE_NAME.ROLES];

export default rolesSlice.reducer;

export const { setRolesData } = rolesSlice.actions;
