import BookRepository from '../../database/books.database';
import { ListBooksDto } from '../../dtos/books.dtos';
import { IBook } from '../../entities/book,entity';

const ListBooksService = async (
  id: number,
  listBooksDto: ListBooksDto
): Promise<Array<IBook>> => {
  const { filter, page, take } = listBooksDto;

  const books = await new BookRepository().listBooks(id, filter, page, take);

  return books;
};

export default ListBooksService;
