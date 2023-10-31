import { RequestHandler } from 'express';

const emails: RequestHandler = async (req, res) => {
  console.log('recebendo aqui', req.body);

  res.status(200).json();
};

export default emails;
