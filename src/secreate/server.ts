import Fastify from 'fastify';
import { registerRoutes } from './routes';
import { serveStatic } from './serve_static';
import { connectClientSocket } from './connect_socket';
import { startListener } from './listener';


export const startServer = async (): Promise<void> =>
{
   try {
      const { secreatePort } = require ('../../config/config.json');

      const app = Fastify();
      registerRoutes(app);
      serveStatic(app);
      connectClientSocket(app);

      await startListener();
      const address = await app.listen(secreatePort as number);
      console.info(`secreate server listening on ${address}`);

   } catch (err) {
      console.error(err);
      process.exit(1);
   }
};
