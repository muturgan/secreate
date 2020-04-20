import type { IEntity } from '../custom_types';
import { generateEntity } from './helper';
import { Subject } from 'rxjs';

export const entityProducer = new Subject<IEntity>();

setInterval(() => {
   entityProducer.next(
      generateEntity(),
   );
}, 100);
