import UserRepository from '../../database/users.database';
import { ApiError } from '../../middlewares/error.middleware';

const authenticateService = async (id: number) => {
  const existUser = await new UserRepository().checkIfExistWithID(id);

  if (!existUser) {
    throw new ApiError('Usuário não encontrado', 404);
  }
  return;
};

export default authenticateService;
