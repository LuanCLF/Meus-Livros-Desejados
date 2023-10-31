import * as yup from 'yup';
import { CreateUserDto, DeleteUserDto, LoginUserDto } from '../dtos/users.dtos';
import { validation } from '../middlewares/validation.middleware';

const createUserSchema = validation((getSchema) => ({
  body: getSchema<CreateUserDto>(
    yup.object().shape({
      name: yup
        .string()
        .required()
        .min(5)
        .max(20)
        .matches(/^[a-zA-Z]+$/i),

      email: yup.string().required().email().min(6),

      password: yup.string().required().min(5),
    })
  ),
}));

const loginUserSchema = validation((getSchema) => ({
  body: getSchema<LoginUserDto>(
    yup.object().shape({
      email: yup.string().required().email().min(6),

      password: yup.string().required().min(5),
    })
  ),
}));

const editUserSchema = validation((getSchema) => ({
  body: getSchema<CreateUserDto>(
    yup.object().shape({
      name: yup
        .string()
        .required()
        .min(5)
        .max(20)
        .matches(/^[a-zA-Z]+$/i),

      email: yup.string().required().email().min(6),

      password: yup.string().required().min(5),
    })
  ),
}));

const DeleteUserSchema = validation((getSchema) => ({
  body: getSchema<DeleteUserDto>(
    yup.object().shape({
      email: yup.string().required().email().min(6),

      password: yup.string().required().min(5),
    })
  ),
}));
export { createUserSchema, loginUserSchema, editUserSchema, DeleteUserSchema };
