import type { IEntity } from '../custom_types';
import SocketIoClient from 'socket.io-client';
import { Store } from './store';
const config = require('../../config/config.json');


export const startListener = (): Promise<void> =>
{
   return new Promise(resolve =>
      {
      const socket = SocketIoClient('http://localhost:' + config.sourcePort);

      socket.on('connect', resolve);

      socket.on('next', (entity: IEntity) => {
         Store.update(entity);
      });
   });
};
