import { Request, Response } from 'express';
import { LoginUserDto } from '../../dtos/users.dtos';
import loginUserService from '../../services/users/loginUser.services';

const loginUser = async (req: Request<{}, {}, LoginUserDto>, res: Response) => {
  const user = await loginUserService(req.body);

  res.status(200).json({ ...user });
};

export default loginUser;
