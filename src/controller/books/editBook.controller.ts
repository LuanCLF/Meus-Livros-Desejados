import { Request, Response } from 'express';
import { EditBookDto, EditBookQueryDto } from '../../dtos/books.dtos';
import EditBookService from '../../services/books/edit.services';

const editBook = async (
  req: Request<EditBookQueryDto, {}, EditBookDto>,
  res: Response
) => {
  const { id } = req.headers;

  const { bookID } = req.params;

  await EditBookService(req.body, Number(id), bookID);

  res.status(204).json();
};

export default editBook;
