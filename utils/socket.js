import { config } from '@/config/config';
import { io } from 'socket.io-client';

let socket;

const connectSocket = (token) => {
  // Establish a socket connection
  if (!socket) {
    socket = io(config.ROOT_API, {
      transports: ['websocket'],
      extraHeaders: { authorization: `JWT ${token}` }, // Pass the userId or any other dynamic data if needed
    });

    socket.on('connection', () => {
      // logger.log(`Connected to server with socket ID: ${socket.id}`);
    });

    socket.on('disconnect', () => {
      // logger.info(`Disconnected from server ${socket.id}`);
    });
  }

  return socket;
};

export { connectSocket };
