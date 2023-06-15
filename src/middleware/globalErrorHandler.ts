import { NextFunction, Request, Response } from 'express';
import config from '../config/index';
import { IGenericErrorMessages } from '../interface/error';
import handleValidationError from '../errors/handleValidationError';
import ApiError from '../errors/ApiError';

const globalErrorHandler = (
  error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = 'Internal Server Error!';
  let errorMessages: IGenericErrorMessages[] = [];

  if (error?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } //
  else if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  } //
  else if (error instanceof Error) {
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  }

  res.status(statusCode).send({
    success: false,
    statusCode,
    message,
    errorMessages,
    stack: config.node_env === 'production' ? undefined : error?.stack,
  });
  next();
};

export default globalErrorHandler;
