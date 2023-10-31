import { Request, Response } from 'express';
import { LoginUserDto } from '../../dtos/users.dtos';
import LoginUserService from '../../services/users/loginUser.services';

const loginUser = async (req: Request<{}, {}, LoginUserDto>, res: Response) => {
  const user = await LoginUserService(req.body);

  res.status(200).json({ ...user });
};

export default loginUser;
