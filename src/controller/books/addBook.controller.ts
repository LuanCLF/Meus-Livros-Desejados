import { Request, Response } from 'express';
import AddBookService from '../../services/books/add.services';
import { AddBookDto } from '../../dtos/books.dtos';

const addBook = async (req: Request<{}, {}, AddBookDto>, res: Response) => {
  const { id } = req.headers;

  const book = await AddBookService(req.body, Number(id));

  res.status(201).json(book);
};

export default addBook;
