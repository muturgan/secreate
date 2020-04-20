import { generateEntity } from './helper';
import EventEmitter from 'events';

const { eventesPerSecond } = require('../../config/config.json');

export const entityProducer = new EventEmitter();

setInterval(
   () => entityProducer.emit('entity', generateEntity()),
   Math.round(1000 / eventesPerSecond),
).unref();
