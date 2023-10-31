import BookRepository from '../../database/books.database';
import { AddBookDto } from '../../dtos/books.dtos';

const AddBookService = async (
  addBook: AddBookDto,
  id: number
): Promise<void> => {
  await new BookRepository().add(addBook, id);

  return;
};

export default AddBookService;
