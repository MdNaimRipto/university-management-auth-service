import { NextFunction, Request, Response } from 'express';
import { UserService } from './users.service';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user } = req.body;
    const result = await UserService.createUser(user);
    res.status(201).send({
      statusCode: 201,
      message: 'User Created Successfully',
      user: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  createUser,
};
