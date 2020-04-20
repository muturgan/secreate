import { createServer } from 'http';
import SocketIo from 'socket.io';
import { entityProducer } from './producer';
import type { IEntity } from '../custom_types';


export const startServer = (): Promise<void> => {
   return new Promise(resolve =>
   {
      const { sourcePort } = require('../../config/config.json');

      const server = createServer();
      const io = SocketIo(server);

      entityProducer.on('entity',
         (entity: IEntity) => io.sockets.emit('next', entity),
      );

      server.listen(sourcePort, () => {
         console.info('entity source works...');
         resolve();
      });
   });
};
