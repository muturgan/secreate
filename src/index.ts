import * as source from './source/server';
import * as secreate from './secreate/server';

source
   .startServer()
   .then(() => secreate.startServer());
