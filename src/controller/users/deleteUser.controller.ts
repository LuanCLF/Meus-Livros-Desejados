import { Request, RequestHandler, Response } from 'express';
import { DeleteUserDto } from '../../dtos/users.dtos';
import DeleteUserService from '../../services/users/deleteUser.services';

const deleteUser = async (
  req: Request<{}, {}, DeleteUserDto>,
  res: Response
) => {
  await DeleteUserService(req.body);

  res.status(204).json();
};

export default deleteUser;
