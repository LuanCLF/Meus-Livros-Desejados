import { RequestHandler } from 'express';
import { CreateUserDto } from '../../dtos/users.dtos';
import UserRepository from '../../database/users.database';
import { ApiError } from '../../middlewares/error';

const CreateUser = async (createUser: CreateUserDto) => {
  const userRepository = new UserRepository();

  const emailExist = await userRepository.checkIfExistWithEmail(
    createUser.email
  );

  if (emailExist) {
    throw new ApiError('Email já está cadastrado', 409);
  }

  await userRepository.create(createUser);

  return;
};

export default CreateUser;
