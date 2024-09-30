import { configureSocket } from './components/io.js';
import express from 'express';
import {createServer} from 'node:http';

const app = express();
const server = createServer(app);

configureSocket(server);

const port = process.env.PORT ?? 1234;

server.listen(port);