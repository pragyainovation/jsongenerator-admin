import { KEYS } from '@/constant/common/constant';
import { SLICE_NAME } from '@/constant/common/sliceName';
import { setTheme } from '@/redux/slice/themeSlice';
import store from '@/redux/store';
import '@/styles/globals.css';
import '@/styles/custom-date-picker.css'; // Adjust path as necessary
import LocalStorage from '@/utils/localStorage';
import { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import the toast styles

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <ToastContainer />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

const ThemeProvider = ({ children }) => {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state[SLICE_NAME.THEME].isDark);

  useEffect(() => {
    const savedTheme = LocalStorage.get(KEYS.THEME);
    if (savedTheme) {
      dispatch(setTheme(savedTheme)); // Set theme from local storage
    }
  }, [dispatch]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark); // Toggle dark class
  }, [isDark]);

  return <>{children}</>;
};
