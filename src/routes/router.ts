import express from 'express';
import controller from '../controller';
import { createUserSchema, loginUserSchema } from '../schemas/users.schema';

const router = express();

router.post('/emails', controller.emails);
router.post('/user', createUserSchema, controller.createUser);
router.post('/user/login', loginUserSchema, controller.loginUser);

export default router;
