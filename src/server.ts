import 'express-async-errors';
import './schemas/yup/translationsYup';
import 'dotenv/config';

import express from 'express';
import router from './routes/router';
import { errorHandling } from './middlewares/error.middleware';

const server = express();

server.use(express.json());
server.use(router);
server.use(errorHandling);
export default server;
