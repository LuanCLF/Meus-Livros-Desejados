import { CreateUserDto } from '../../dtos/users.dtos';
import UserRepository from '../../database/users.database';
import { ApiError } from '../../middlewares/error.middleware';
import { hash } from 'bcrypt';
import htmlCompiler from '../../shared/htmlCompiler';
import emailSender from '../../shared/emailSender';
import WarningRepository from '../../database/warnings.database';
import { pathTemplate, urlToReturn } from '../../shared/paths';

const CreateUserService = async (createUser: CreateUserDto) => {
  const { email, password, name } = createUser;

  const userRepository = new UserRepository();

  const emailExist = await userRepository.checkIfExistWithEmail(email);

  if (emailExist) {
    throw new ApiError('Email já está cadastrado', 409);
  }

  const passwordHashed = await hash(password, 10);

  createUser.password = passwordHashed;

  await userRepository.create(createUser);

  const id = await new WarningRepository().add({
    email,
    name,
    status: 'Enviado',
  });
  const html = await htmlCompiler(`${pathTemplate}/user.html`, {
    userName: name,
    action: 'cadastrado',
  });

  await emailSender({
    toEmail: email,
    content: html,
    subject: 'Cadastro no sistema',
    returnTo: urlToReturn,
    id,
  });

  return;
};

export default CreateUserService;
