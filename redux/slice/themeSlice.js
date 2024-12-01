const { KEYS, THEME } = require('@/constant/common/constant');
const { SLICE_NAME } = require('@/constant/common/sliceName');
const { default: LocalStorage } = require('@/utils/localStorage');
const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  isDark: false,
};

const themeSlice = createSlice({
  name: SLICE_NAME.THEME,
  initialState,
  reducers: {
    toggleTheme(state) {
      state.isDark = !state.isDark;
      LocalStorage.set(KEYS.THEME, state.isDark ? THEME.DARK : THEME.LIGHT);
    },
    setTheme(state, action) {
      state.isDark = action.payload === THEME.DARK;
    },
  },
});

export default themeSlice.reducer;

export const { toggleTheme, setTheme } = themeSlice.actions;
