import { RequestHandler } from 'express';
import { CreateUserDto } from '../../dtos/users.dtos';
import UserRepository from '../../database/users.database';
import { ApiError } from '../../middlewares/error.middleware';
import { hash } from 'bcrypt';

const CreateUserService = async (createUser: CreateUserDto) => {
  const { email, password } = createUser;

  const userRepository = new UserRepository();

  const emailExist = await userRepository.checkIfExistWithEmail(email);

  if (emailExist) {
    throw new ApiError('Email já está cadastrado', 409);
  }

  const passwordHashed = await hash(password, 10);

  createUser.password = passwordHashed;

  await userRepository.create(createUser);

  return;
};

export default CreateUserService;
