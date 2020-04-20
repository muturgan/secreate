import Fastify from 'fastify';
import { registerRoutes } from './routes';
import { startListener } from './listener';
const config = require ('../../config/config.json');


const app = Fastify();
registerRoutes(app);


const bootstrap = async () =>
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
bootstrap();
