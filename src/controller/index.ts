import addBook from './books/addBook.controller';
import deleteBook from './books/deleteBook.controller';
import editBook from './books/editBook.controller';
import listBooks from './books/listBooks.controller';
import searchBook from './books/searchBook.controller';
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
