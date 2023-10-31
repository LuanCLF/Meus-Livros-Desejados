import { RequestHandler } from 'express';
import ListBooksService from '../../services/books/list.services';

const listBooks: RequestHandler = async (req, res) => {
  const { id } = req.headers;

  let { filter: filterQuery, page: pageQuery, take: takeQuery } = req.query;

  const filter = !filterQuery ? '' : String(filterQuery);
  const page = !pageQuery ? 0 : Number(pageQuery) * 10;
  const take = !takeQuery ? 10 : Number(takeQuery);

  const books = await ListBooksService(Number(id), {
    filter,
    page,
    take,
  });

  res.status(200).json(books);
};

export default listBooks;
