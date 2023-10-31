import { Request, RequestHandler, Response } from 'express';
import { DeleteUserDto } from '../../dtos/users.dtos';
import deleteUserService from '../../services/users/deleteUser.services';

const deleteUser = async (
  req: Request<{}, {}, DeleteUserDto>,
  res: Response
) => {
  await deleteUserService(req.body);

  res.status(204).json();
};

export default deleteUser;
