import BookRepository from '../../database/books.database';
import { AddBookDto } from '../../dtos/books.dtos';
import { IBook } from '../../entities/book,entity';

const AddBookService = async (
  addBook: AddBookDto,
  id: number
): Promise<IBook> => {
  const { id: bookId } = await new BookRepository().add(addBook, id);

  return {
    id: bookId,
    ...addBook,
  };
};

export default AddBookService;
