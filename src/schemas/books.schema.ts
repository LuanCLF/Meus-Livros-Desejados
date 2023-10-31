import * as yup from 'yup';
import { validation } from '../middlewares/validation.middleware';
import { AddBookDto } from '../dtos/books.dtos';

const addBookSchema = validation((getSchema) => ({
  body: getSchema<AddBookDto>(
    yup.object().shape({
      title: yup.string().required().min(2).max(20),

      author: yup
        .string()
        .required()
        .min(4)
        .matches(/^[a-zA-Z]+$/i),

      date: yup.string().optional().min(5),

      gender: yup.string().optional().min(4),
    })
  ),
}));

export { addBookSchema };
