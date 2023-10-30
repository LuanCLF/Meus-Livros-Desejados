import { RequestHandler } from 'express';
import { ApiError } from './error.middleware';
import jwt from 'jsonwebtoken';
import passJwt from '../shared/jwt';
import authenticate from '../controller/authenticate/authenticate.controller';

const authentication: RequestHandler = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new ApiError('Não autorizado', 401);
  }

  const token = authorization.split(' ')[1];
  let auth: string | jwt.JwtPayload = '';

  try {
    auth = jwt.verify(token, passJwt);
  } catch (error) {
    throw new ApiError('Não autorizado', 401);
  }

  const user = JSON.parse(JSON.stringify(auth));

  await authenticate(user.id);

  req.headers = {
    userID: user.id,
  };

  next();
};

export default authentication;
