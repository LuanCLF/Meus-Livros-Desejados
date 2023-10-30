import 'express-async-errors';
import './schemas/yup/translationsYup';
import 'dotenv/config';

console.log(process.env.DATABASE_URL);
console.log(process.env.DIRECT_URL);

import express from 'express';
import router from './routes/router';

const server = express();

server.use(express.json());
server.use(router);
export default server;
