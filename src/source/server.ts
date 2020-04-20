import { createServer } from 'http';
import SocketIo from 'socket.io';
import { entityProducer } from './producer';
const config = require('../../config/config.json');

export const startServer = (): Promise<void> => {
   return new Promise(resolve =>
   {
      const server = createServer();
      const io = SocketIo(server);

      entityProducer.subscribe(
         entity => io.sockets.emit('next', entity),
      );

      server.listen(config.sourcePort, () => {
         console.info('entity source works...');
         resolve();
      });
   });
};
