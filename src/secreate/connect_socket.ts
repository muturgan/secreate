import type { App } from '../custom_types';
import { Store } from './store';
import SocketIo from 'socket.io';

export const connectClientSocket = (app: App) =>
{
   const { clientRefreshInterval } = require('../../config/config.json');

   const io = SocketIo(app.server);

   setInterval(
      () => io.sockets.emit('snapshot', Store.getStore()),
      clientRefreshInterval,
   ).unref();

};
