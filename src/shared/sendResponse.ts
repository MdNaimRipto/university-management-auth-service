import { Response } from 'express';

type IResponseType<T> = {
  statusCode: number;
  success: boolean;
  message?: string | null;
  data?: T;
};

const sendResponse = <T>(res: Response, data: IResponseType<T>): void => {
  res.status(data.statusCode).send({
    success: data.success,
    statusCode: data.statusCode,
    message: data.message || null,
    data: data.data || null,
  });
};

export default sendResponse;
