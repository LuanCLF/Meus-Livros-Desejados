import BookRepository from '../../database/books.database';
import { IBook } from '../../entities/book,entity';
import { ApiError } from '../../middlewares/error.middleware';

const SearchBookService = async (
  id: number,
  bookID: number
): Promise<IBook> => {
  const book = await new BookRepository().getBookWithIds(id, bookID);

  if (!book) {
    throw new ApiError('O usuário não tem o livro informado', 404);
  }

  return book;
};

export default SearchBookService;
