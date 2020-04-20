import type { IEntity } from '../custom_types';
import SocketIoClient from 'socket.io-client';
import { Store } from './store';


export const startListener = (): Promise<void> =>
{
   return new Promise(resolve =>
   {
      const { sourcePort } = require('../../config/config.json');
      const socket = SocketIoClient('http://localhost:' + sourcePort);

      socket.on('connect', resolve);

      socket.on('next', (entity: IEntity) => {
         Store.update(entity);
      });
   });
};
