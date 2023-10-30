import authenticateService from '../../services/authenticate/authenticate.services';

const authenticate = async (id: number) => {
  await authenticateService(id);

  return;
};

export default authenticate;
