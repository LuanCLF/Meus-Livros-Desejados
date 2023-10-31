import { Request, Response } from 'express';
import { EditBookDto } from '../../dtos/books.dtos';
import EditBookService from '../../services/books/edit.services';

const editBook = async (
  req: Request<{ bookID: string }, {}, EditBookDto>,
  res: Response
) => {
  const { id } = req.headers;

  const { bookID } = req.params;

  await EditBookService(req.body, Number(id), Number(bookID));

  res.status(204).json();
};

export default editBook;
