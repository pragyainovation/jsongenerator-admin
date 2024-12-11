// lib/socket.js
import { io } from 'socket.io-client';
import { config } from '@/config/config';
import { fetchToken } from './auth';

let socket;

export const getSocket = async () => {
  if (!socket) {
    const token = await fetchToken(); // Fetch the token dynamically
    if (!token) {
      return null;
    }

    socket = io(config.SOCKET_URL, {
      withCredentials: true,
      transports: ['websocket'], // Optimize connection
      auth: { token: `JWT ${token}` },
    });
  }
  return socket;
};
