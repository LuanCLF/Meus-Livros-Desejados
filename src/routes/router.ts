import 'express-async-errors';
import 'dotenv/config';

import express from 'express';
import controller from '../controller';
import {
  DeleteUserSchema,
  createUserSchema,
  editUserSchema,
  loginUserSchema,
} from '../schemas/users.schema';
import authentication from '../middlewares/authenticate.middleware';
import {
  addBookSchema,
  editBookSchema,
  listBookSchema,
} from '../schemas/books.schema';

const router = express();

router.post('/user', createUserSchema, controller.createUser);
router.post('/user/login', loginUserSchema, controller.loginUser);

router.use(authentication);

router.put('/user', editUserSchema, controller.editUser);
router.delete('/user', DeleteUserSchema, controller.deleteUser);

router.post('/book', addBookSchema, controller.addBook);
router.put('/book', editBookSchema, controller.editBook);
router.get('/books', listBookSchema, controller.listBooks);
router.get('/book/id', controller.searchBook);
router.delete('/book', controller.deleteBook);

export default router;
