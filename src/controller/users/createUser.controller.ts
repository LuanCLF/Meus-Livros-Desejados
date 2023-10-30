import { Request, Response } from 'express';
import CreateUserService from '../../services/users/createUser.services';
import { CreateUserDto } from '../../dtos/users.dtos';

const createUser = async (
  req: Request<{}, {}, CreateUserDto>,
  res: Response
) => {
  await CreateUserService(req.body);

  res.status(200).json();
};

export default createUser;
