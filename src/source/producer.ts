import type { IEntity } from '../custom_types';
import { generateEntity } from './helper';
import { Subject } from 'rxjs';
const { eventesPerSecond } = require('../../config/config.json');

export const entityProducer = new Subject<IEntity>();

setInterval(
   () => entityProducer.next(generateEntity()),
   Math.round(1000 / eventesPerSecond),
).unref();
