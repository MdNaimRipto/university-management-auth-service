import { NextFunction, Request, Response } from 'express';
import { UserService } from './users.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body;
    const result = await UserService.createUser(user);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'User Created Successfully',
      data: result,
    });
    next();
  }
);

export const UserController = {
  createUser,
};
