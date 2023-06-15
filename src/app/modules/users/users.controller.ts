import { NextFunction, Request, Response } from 'express';
import usersService from './users.service';

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user } = req.body;
    const result = await usersService.createUserToDB(user);
    res.status(201).send({
      statusCode: 201,
      message: 'User Created Successfully',
      user: result,
    });
  } catch (error: any) {
    // res.status(400).send({
    //   statusCode: 400,
    //   errorMessage: error,
    // });
    next(error);
    console.log(error.message);
  }
};
