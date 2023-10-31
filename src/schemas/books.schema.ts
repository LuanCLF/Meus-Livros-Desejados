import * as yup from 'yup';
import { validation } from '../middlewares/validation.middleware';
import {
  AddBookDto,
  EditBookDto,
  EditBookQueryDto,
  ListBooksQueryDto,
  SearchBookDto,
} from '../dtos/books.dtos';

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
const editBookSchema = validation((getSchema) => ({
  body: getSchema<EditBookDto>(
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
  query: getSchema<EditBookQueryDto>(
    yup.object().shape({
      bookID: yup.number().required().min(1),
    })
  ),
}));
const listBookSchema = validation((getSchema) => ({
  query: getSchema<ListBooksQueryDto>(
    yup.object().shape({
      filter: yup.string().optional(),
      page: yup.number().optional().min(0),
      take: yup.number().optional().min(0),
    })
  ),
}));
const searchBookSchema = validation((getSchema) => ({
  query: getSchema<SearchBookDto>(
    yup.object().shape({
      bookID: yup.number().required(),
    })
  ),
}));

export { addBookSchema, editBookSchema, listBookSchema, searchBookSchema };
