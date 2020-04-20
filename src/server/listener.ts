import type { IEntity } from '../custom_types';
import SocketIoClient from 'socket.io-client';
const config = require('../../config/config.json');

const socket = SocketIoClient('http://localhost:' + config.sourcePort);

socket.on('next', (entity: IEntity) => {
   console.log(entity);
});
