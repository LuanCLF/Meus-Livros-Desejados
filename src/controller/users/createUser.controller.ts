import { Request, Response } from 'express';
import CreateUser from '../../services/users/createUser.services';
import { CreateUserDto } from '../../dtos/users.dtos';

const createUser = async (
  req: Request<{}, {}, CreateUserDto>,
  res: Response
) => {
  await CreateUser(req.body);

  res.status(200).json();
};

export default createUser;
