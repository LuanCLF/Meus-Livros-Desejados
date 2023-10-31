import { compare } from 'bcrypt';
import UserRepository from '../../database/users.database';
import { LoginUserDto } from '../../dtos/users.dtos';
import { ApiError } from '../../middlewares/error.middleware';
import jwt from 'jsonwebtoken';
import passJwt from '../../shared/jwt';
import { IUserLogin } from '../../entities/user.entity';

const LoginUserService = async (
  loginUser: LoginUserDto
): Promise<IUserLogin> => {
  const { email, password } = loginUser;

  const userRepository = new UserRepository();

  const user = await userRepository.getPasswordWithEmail(email);

  if (!user) {
    throw new ApiError('Email ou senha incorretos', 401);
  }

  const { id, password: hashed } = user;

  const correctPassword = await compare(password, hashed);
  if (!correctPassword) {
    throw new ApiError('Email ou senha incorretos', 401);
  }

  const token = jwt.sign({ id }, passJwt, { expiresIn: '8h' });

  return {
    user: {
      name: user.name,
      email,
    },
    token,
  };
};

export default LoginUserService;
