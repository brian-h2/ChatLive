import { configureSocket } from './components/io.js';
import { router } from './components/routes.js';
import { conectiondb } from './components/db.js';

import express from 'express';
import {createServer} from 'node:http';

const app = express();
const server = createServer(app);

await configureSocket(server,conectiondb);

const port = process.env.PORT ?? 1234;

app.use(router);

server.listen(port, () => {
    console.log('Server is listen ' + port)
});