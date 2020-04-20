import type { App } from '../custom_types';
import fastifyStatic from 'fastify-static';
import path from 'path';

export const serveStatic = (app: App) =>
{
   app.register(fastifyStatic, {
      root: path.join(process.cwd(), 'static'),
   });

   app.get('/app.js', (_req, res) => {
      res.sendFile('app.js', path.join(process.cwd(), 'dist', 'client'));
   });
};
