import type { App } from '../custom_types';
import fastifyStatic from 'fastify-static';
import path from 'path';

export const serveStatic = (app: App) =>
{
   app.register(fastifyStatic, {
      root: path.join(process.cwd(), 'static'),
   });
};
