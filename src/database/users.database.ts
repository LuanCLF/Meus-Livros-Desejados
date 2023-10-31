import prisma from '../connection/database.connection';
import { CreateUserDto, EditUserDto } from '../dtos/users.dtos';

export default class UserRepository {
  async create(createUser: CreateUserDto): Promise<void> {
    await prisma.users.create({
      data: {
        ...createUser,
      },
    });
    return;
  }
  async edit(editUser: EditUserDto, id: number): Promise<void> {
    await prisma.users.update({
      data: {
        ...editUser,
      },
      where: {
        id,
      },
    });
    return;
  }

  async delete(id: number): Promise<void> {
    await prisma.users.delete({
      where: {
        id,
        wishes: {
          every: {
            id_user: id,
          },
        },
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
  async checkIfExistWithID(id: number): Promise<boolean> {
    const user = await prisma.users.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
      },
    });

    return !!user;
  }
}
