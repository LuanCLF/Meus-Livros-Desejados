import addBook from './books/add.services';
import deleteBook from './books/delete.services';
import editBook from './books/edit.services';
import listBooks from './books/list.services';
import searchBook from './books/search.services';
import createUser from './users/createUser.services';
import deleteUser from './users/deleteUser.services';
import editUser from './users/editUser.services';
import loginUser from './users/loginUser.services';

const services = {
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

export default services;
