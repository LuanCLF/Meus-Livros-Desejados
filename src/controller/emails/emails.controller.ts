import { RequestHandler } from 'express';
import EmailService from '../../services/emails/emails.services';

const emails: RequestHandler = async (req, res) => {
  await EmailService(req.body);

  res.status(204).json();
};

export default emails;
