import prisma from '../connection/database.connection';
import { AddBookDto } from '../dtos/books.dtos';

export default class BookRepository {
  async add(addBookDto: AddBookDto, id: number): Promise<void> {
  
    await prisma.books.create({
      data: {
        ...addBookDto,
        wishes: {
          create: {
            id_user: id,
          },
        },
      },
    });

    return;
  }
}
