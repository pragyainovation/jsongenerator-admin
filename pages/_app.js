import { KEYS } from '@/constant/common/constant';
import { SLICE_NAME } from '@/constant/common/sliceName';
import { setTheme } from '@/redux/slice/themeSlice';
import store from '@/redux/store';
import '@/styles/globals.css';
import '@/styles/custom-date-picker.css'; // Adjust path as necessary
import LocalStorage from '@/utils/localStorage';
import { useEffect, useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import the toast styles
import { SocketContext } from '@/context/socketContext';
import { getSocket } from '@/lib/socket';

export default function App({ Component, pageProps }) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const initializeSocket = async () => {
      const socketInstance = await getSocket();
      setSocket(socketInstance);
    };
    initializeSocket();

    // Clean up the socket connection on unmount
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  return (
    <Provider store={store}>
      <SocketContext.Provider value={socket}>
        <ThemeProvider>
          <ToastContainer />
          <Component {...pageProps} />
        </ThemeProvider>
      </SocketContext.Provider>
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
