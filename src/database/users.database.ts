import prisma from '../connection/database.connection';
import { CreateUserDto } from '../dtos/users.dtos';

export default class UserRepository {
  async create(createUser: CreateUserDto) {
    await prisma.users.create({
      data: {
        ...createUser,
      },
    });
    return;
  }

  async getPasswordWithEmail(
    email: string
  ): Promise<{ id: number; password: string; name: string } | null> {
    const user = await prisma.users.findFirst({
      where: {
        email,
      },
      select: {
        id: true,
        name: true,
        password: true,
      },
    });

    return user;
  }

  async checkIfExistWithEmail(email: string): Promise<boolean> {
    const user = await prisma.users.findFirst({
      where: {
        email,
      },
      select: {
        id: true,
      },
    });

    return !!user;
  }
}
