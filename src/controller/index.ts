import addBook from './books/add.controller';
import deleteBook from './books/delete.controller';
import editBook from './books/edit.controller';
import listBooks from './books/list.controller';
import searchBook from './books/search.controller';
import createUser from './users/createUser.controller';
import deleteUser from './users/deleteUser.controller';
import editUser from './users/editUser.controller';
import loginUser from './users/loginUser.controller';

const controller = {
  createUser,
  loginUser,
  editUser,
  deleteUser,
  searchBook,
  listBooks,
  editBook,
  deleteBook,
  addBook,
};

export default controller;
