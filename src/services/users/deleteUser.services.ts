import { compare } from 'bcrypt';
import UserRepository from '../../database/users.database';
import { DeleteUserDto } from '../../dtos/users.dtos';
import { ApiError } from '../../middlewares/error.middleware';

const DeleteUserService = async (deleteUser: DeleteUserDto) => {
  const { email, password } = deleteUser;
  const userRepository = new UserRepository();
  const user = await userRepository.getPasswordWithEmail(email);

  if (!user) {
    throw new ApiError('Email ou senha incorretos', 401);
  }

  const { password: hashed } = user;

  const correctPassword = await compare(password, hashed);
  if (!correctPassword) {
    throw new ApiError('Email ou senha incorretos', 401);
  }

  await userRepository.delete(user.id);
};

export default DeleteUserService;
