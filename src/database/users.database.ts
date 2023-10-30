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
