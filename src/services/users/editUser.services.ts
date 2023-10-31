import { hash } from 'bcrypt';
import UserRepository from '../../database/users.database';
import { EditUserDto } from '../../dtos/users.dtos';
import { ApiError } from '../../middlewares/error.middleware';
import WarningRepository from '../../database/warnings.database';
import { pathTemplate, urlToReturn } from '../../shared/paths';
import htmlCompiler from '../../shared/htmlCompiler';
import emailSender from '../../shared/emailSender';

const EditUserService = async (editUser: EditUserDto, id: number) => {
  const { email, password, name } = editUser;

  const userRepository = new UserRepository();

  const emailExist = await userRepository.checkIfExistWithEmail(email);

  if (emailExist) {
    throw new ApiError('Email já está cadastrado', 409);
  }

  const passwordHashed = await hash(password, 10);

  editUser.password = passwordHashed;

  await userRepository.edit(editUser, id);

  const idWarning = await new WarningRepository().add({
    email,
    name,
    status: 'Enviado',
  });
  const html = await htmlCompiler(`${pathTemplate}/user.html`, {
    userName: name,
    action: 'alterado',
  });

  await emailSender({
    toEmail: email,
    content: html,
    subject: 'Atualização do cadastro',
    returnTo: urlToReturn,
    id: idWarning,
  });

  return;
};

export default EditUserService;
