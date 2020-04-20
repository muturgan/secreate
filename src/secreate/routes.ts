import type { App, TEntityName } from '../custom_types';
import { Store } from './store';

const getEntity = (id: string) => {
   return Store.getEntity('Entity' + id as TEntityName);
};

export const registerRoutes = (app: App) =>
{
   app.get('/store', (_req, res) => {
      res.send(Store.getStore());
   });

   app.get('/store/:id', (req, res) => {
      res.send(getEntity(req.params.id));
   });
};
