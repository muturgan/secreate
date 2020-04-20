import type { IEntity } from '../custom_types';
import { generateEntity } from './helper';
import { Subject } from 'rxjs';
const config = require('../../config/config.json');

export const entityProducer = new Subject<IEntity>();

setInterval(() => {
   entityProducer.next(
      generateEntity(),
   );
}, Math.round(1000 / config.eventesPerSecond));
