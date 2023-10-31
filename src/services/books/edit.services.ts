import BookRepository from '../../database/books.database';
import { EditBookDto } from '../../dtos/books.dtos';
import { ApiError } from '../../middlewares/error.middleware';

const EditBookService = async (
  editBook: EditBookDto,
  id: number,
  bookID: number
): Promise<void> => {
  const bookRepository = new BookRepository();
  const bookExist = await bookRepository.checkIfBookExistWithUserId(id, bookID);

  if (!bookExist || bookExist !== bookID) {
    throw new ApiError('O usuário não tem o livro informado', 404);
  }

  await bookRepository.edit(editBook, bookID);

 
};

export default EditBookService;
