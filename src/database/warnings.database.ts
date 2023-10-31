import prisma from '../connection/database.connection';
import { IWarning } from '../entities/warning.entity';

export default class WarningRepository {
  async add({ email, name, status }: Omit<IWarning, 'id'>): Promise<number> {
    const { id } = await prisma.warnings.create({
      data: {
        email,
        name,
        status,
      },
      select: {
        id: true,
      },
    });

    return id;
  }
}
