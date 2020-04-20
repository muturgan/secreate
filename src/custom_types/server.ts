import type { Server, IncomingMessage, ServerResponse } from 'http';
import type { FastifyInstance } from 'fastify';

export type App = FastifyInstance<Server, IncomingMessage, ServerResponse>;
