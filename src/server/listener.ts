import type { IEntity } from '../custom_types';
import SocketIoClient from 'socket.io-client';

const socket = SocketIoClient('http://localhost:' + 4545);

socket.on('next', (entity: IEntity) => {
   console.log(entity);
});
