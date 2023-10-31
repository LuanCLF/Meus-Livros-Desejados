import WarningRepository from '../../database/warnings.database';
import { WarningDto } from '../../dtos/warnings.dtos';

const EmailService = async (warning: WarningDto): Promise<void> => {
  await new WarningRepository().update(warning);
  return;
};
export default EmailService;
