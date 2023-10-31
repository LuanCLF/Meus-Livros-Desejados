import prisma from '../connection/database.connection';
import { AddBookDto, EditBookDto } from '../dtos/books.dtos';
import { IBook } from '../entities/book,entity';

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

  async listBooks(
    id: number,
    filter: string,
    page: number,
    take: number
  ): Promise<Array<IBook>> {
    const books = await prisma.books.findMany({
      where: {
        wishes: {
          some: {
            id_user: id,
          },
        },
        OR: [{ author: { contains: filter } }, { title: { contains: filter } }],
      },
      skip: page,
      take,
      orderBy: {
        id: 'desc',
      },
    });

    return books;
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
