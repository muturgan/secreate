import { createServer } from 'http';
import SocketIo from 'socket.io';
import { entityProducer } from './producer';

const server = createServer();
const io = SocketIo(server);

entityProducer.subscribe(
   entity => io.sockets.emit('next', entity),
);

server.listen(3000);
