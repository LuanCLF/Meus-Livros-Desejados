import { Request, Response } from 'express';
import { EditUserDto } from '../../dtos/users.dtos';
import editUserServices from '../../services/users/editUser.services';

const editUser = async (req: Request<{}, {}, EditUserDto>, res: Response) => {
  const { id } = req.headers;

  await editUserServices(req.body, Number(id));

  res.status(204).json();
};

export default editUser;
