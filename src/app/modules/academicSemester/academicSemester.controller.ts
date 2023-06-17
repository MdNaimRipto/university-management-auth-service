import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponse';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { semester } = req.body;
    const result = await AcademicSemesterService.createSemester(semester);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Semester Created Successfully',
      data: result,
    });
    next();
  }
);

export const AcademicSemesterController = {
  createSemester,
};
