import { RequestHandler } from 'express';
import SearchBookService from '../../services/books/search.services';

const searchBook: RequestHandler = async (req, res) => {
  const { id } = req.headers;
  const { bookID } = req.params;

  const book = await SearchBookService(Number(id), Number(bookID));

  res.status(200).json(book);
};

export default searchBook;
