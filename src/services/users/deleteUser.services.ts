import { compare } from 'bcrypt';
import UserRepository from '../../database/users.database';
import { DeleteUserDto } from '../../dtos/users.dtos';
import { ApiError } from '../../middlewares/error.middleware';
import WarningRepository from '../../database/warnings.database';
import { pathTemplate, urlToReturn } from '../../shared/paths';
import emailSender from '../../shared/emailSender';
import htmlCompiler from '../../shared/htmlCompiler';

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

  const id = await new WarningRepository().add({
    email,
    name: user.name,
    status: 'Enviado',
  });
  const html = await htmlCompiler(`${pathTemplate}/user.html`, {
    userName: user.name,
    action: 'deletado',
  });

  await emailSender({
    toEmail: email,
    content: html,
    subject: 'Cadastro deletado',
    returnTo: urlToReturn,
    id,
  });
};

export default DeleteUserService;
