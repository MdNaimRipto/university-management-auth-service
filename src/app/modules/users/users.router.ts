import express from 'express';
import { UserController } from './users.controller';
import { UserValidation } from './users.validation';
import validateRequest from '../../../middleware/validateRequest';

const router = express.Router();

router.post(
  '/createUser',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createUser
);

export default router;
