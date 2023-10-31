import BookRepository from '../../database/books.database';
import { ApiError } from '../../middlewares/error.middleware';

const DeleteBookService = async (id: number, bookID: number): Promise<void> => {
  const bookRepository = new BookRepository();
  const book = await bookRepository.getBookWithIds(id, bookID);
  if (!book) {
    throw new ApiError('O usuário não tem o livro informado', 404);
  }

  await bookRepository.delete(id, bookID);
  return;
};

export default DeleteBookService;
