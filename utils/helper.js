import fetchAPI from '@/api/fetchAPI';
import { sessionOptions } from '@/lib/sessionOptions';
import route from '@/route/routes';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getIronSession } from 'iron-session';
import { STATUS } from '@/constant/common/constant';
import showToast from './showToast';
import Router from 'next/router';
import { apiList, commonApiList } from '@/api/apiList';
import chroma from 'chroma-js';

// logout
export const logout = async () => {
  try {
    const response = await fetch('/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      ERouter.push(route.login);
    } else {
      console.error('Failed to log out');
    }
  } catch (error) {
    console.error('An error occurred during logout:', error);
  }
};

// router
export const ERouter = {
  push: (route) => {
    Router?.push(route);
  },
  replace: (route) => {
    Router?.replace(route);
  },
};

// iron-session
export const getSession = async (req, res) => {
  const session = await getIronSession(req, res, sessionOptions);
  return session;
};

// redux
export function handleAsyncState(builder, asyncThunk, isStoreResponse = false) {
  builder
    .addCase(asyncThunk.pending, (state) => {
      state.isLoading = STATUS.LOADING;
      state.error = null;
    })
    .addCase(asyncThunk.fulfilled, (state, action) => {
      state.isLoading = STATUS.FULFILLED;
      // Optionally store response data if needed
      if (isStoreResponse) {
        state.response = action?.payload;
      }
    })
    .addCase(asyncThunk.rejected, (state, action) => {
      state.isLoading = STATUS.FAILED;
      state.error = action?.payload; // Store error message
    });
}

export function handleAsyncThunk({
  thunkName,
  apiName,
  module = '', // Default value for module
  commonAPI = false, // Default value for commonAPI
  auth = true, // Default value for auth
}) {
  return createAsyncThunk(thunkName, async ({ data = {}, params = '' }, { rejectWithValue }) => {
    try {
      const response = await fetchAPI({
        apiName,
        data,
        params,
        module,
        commonAPI,
        auth,
      });
      const apiConfig = commonAPI ? commonApiList[apiName] : apiList[apiName];
      const { method } = apiConfig;

      method.toUpperCase() !== 'POST' && showToast(response?.message, STATUS.SUCCESS);

      return response?.data ?? response;
    } catch (error) {
      return rejectWithValue(error.message || 'An error occurred during the API call');
    }
    // Use fetchAPI to send the form data to the server
  });
}

// redux initialstate
export function getInitState(state) {
  return {
    data: { ...state },
    isLoading: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: undefined,
    response: undefined,
  };
}

export const clearInitState = {
  data: {},
  isLoading: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: undefined,
  response: undefined,
};

export const handleKeyDown = (onClick, event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    onClick?.(event);
  }
};

export const loaderHandler = (status) => {
  return status === STATUS.LOADING;
};

export const fullfiledHandler = (status) => {
  return status === STATUS.FULFILLED;
};

export const getId = (data) => {
  return data?._id ?? data?.id;
};

export const setNestedValue = (obj, path, value) => {
  const keys = path.split('.'); // Split 'data.subdata' into ['data', 'subdata']
  let current = obj;

  keys.forEach((key, index) => {
    if (index === keys.length - 1) {
      // If it's the last key, set the value
      current[key] = value;
    } else {
      // If key doesn't exist, initialize it as an object
      if (!current[key]) {
        current[key] = {};
      }
      current = current[key];
    }
  });
};

export function groupBy(data, groupKey, valueKeys) {
  return data.reduce((acc, item) => {
    const groupValue = item[groupKey];

    // Agar category/group exist nahi karti, to ek empty array banaye
    if (!acc[groupValue]) {
      acc[groupValue] = [];
    }

    // Selected fields ko object me leke push kare
    const value = valueKeys.reduce((obj, key) => {
      obj[key] = item[key];
      return obj;
    }, {});

    acc[groupValue].push(value);

    return acc;
  }, {});
}

export const convertHexToRgba = (hexArray, alpha = 1) => {
  return hexArray.map((hex) => {
    const [r, g, b] = chroma(hex).rgb(); // Get RGB values
    return `rgba(${r}, ${g}, ${b}, ${alpha})`; // Return RGBA format
  });
};
