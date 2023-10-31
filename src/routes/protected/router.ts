import express from 'express';
import controller from '../../controller';
import { DeleteUserSchema, editUserSchema } from '../../schemas/users.schema';
import {
  addBookSchema,
  deleteBookSchema,
  editBookSchema,
  listBookSchema,
  searchBookSchema,
} from '../../schemas/books.schema';
import authentication from '../../middlewares/authenticate.middleware';
const routerProtected = express();

routerProtected.use(authentication);

routerProtected.put('/user', editUserSchema, controller.editUser);
routerProtected.delete('/user', DeleteUserSchema, controller.deleteUser);

routerProtected.post('/book', addBookSchema, controller.addBook);
routerProtected.put('/book/bookID', editBookSchema, controller.editBook);
routerProtected.get('/books', listBookSchema, controller.listBooks);
routerProtected.get('/book/bookID', searchBookSchema, controller.searchBook);
routerProtected.delete('/book', deleteBookSchema, controller.deleteBook);

export default routerProtected;
