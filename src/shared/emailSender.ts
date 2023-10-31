import { IEmail } from '../entities/email.entity';

const emailSender = async (object: IEmail): Promise<void> => {
  await fetch('http://localhost:3000/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(object),
  });

  return;
};

export default emailSender;
