import Fastify from 'fastify';
import serveStatic from 'fastify-static';
import path from 'path';
import { registerRoutes } from './routes';
import { startListener } from './listener';
const config = require ('../../config/config.json');


const app = Fastify();
registerRoutes(app);

app.register(serveStatic, {
   root: path.join(process.cwd(), 'static'),
});


export const startServer = async (): Promise<void> =>
{
   try {
      await startListener();
      const address = await app.listen(config.secreatePort as number);
      console.info(`secreate server listening on ${address}`);

   } catch (err) {
      console.error(err);
      process.exit(1);
   }
};
