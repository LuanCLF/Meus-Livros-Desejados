import prisma from '../connection/database.connection';
import { AddBookDto, EditBookDto } from '../dtos/books.dtos';

export default class BookRepository {
  async add(addBookDto: AddBookDto, id: number): Promise<{ id: number }> {
    const book = await prisma.books.create({
      data: {
        ...addBookDto,
        wishes: {
          create: {
            id_user: id,
          },
        },
      },
      select: {
        id: true,
      },
    });

    return book;
  }
  async edit(editBook: EditBookDto, bookID: number): Promise<void> {
    await prisma.books.update({
      data: {
        ...editBook,
      },
      where: {
        id: bookID,
      },
    });

    return;
  }

  async checkIfBookExistWithUserId(
    id: number,
    bookID: number
  ): Promise<number | undefined> {
    const book = await prisma.books.findFirst({
      where: {
        id: bookID,
        wishes: {
          some: {
            id_user: id,
          },
        },
      },
    });

    return book?.id;
  }
}
