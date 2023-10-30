import 'express-async-errors';
import 'dotenv/config';

import express from 'express';
import controller from '../controller';
import { createUserSchema } from '../schemas/users.schema';

const router = express();


router.post('/user', createUserSchema, controller.createUser);
router.post('/user/login', controller.loginUser);
router.put('/user', controller.editUser);
router.delete('/user', controller.deleteUser);

router.post('/book', controller.addBook);
router.put('/book', controller.editBook);
router.get('/book/id', controller.searchBook);
router.get('/books', controller.listBooks);
router.delete('/book', controller.deleteBook);

export default router;
