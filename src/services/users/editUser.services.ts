import { hash } from 'bcrypt';
import UserRepository from '../../database/users.database';
import { EditUserDto } from '../../dtos/users.dtos';
import { ApiError } from '../../middlewares/error.middleware';

const editUserServices = async (editUser: EditUserDto, id: number) => {
  const { email, password } = editUser;

  const userRepository = new UserRepository();

  const emailExist = await userRepository.checkIfExistWithEmail(email);

  if (emailExist) {
    throw new ApiError('Email já está cadastrado', 409);
  }

  const passwordHashed = await hash(password, 10);

  editUser.password = passwordHashed;

  await userRepository.edit(editUser, id);

  return;
};

export default editUserServices;
