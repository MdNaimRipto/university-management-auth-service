import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { academicSemesterTitleCodeMapper } from './academicSemester.constant';
import { IAcademicSemester } from './academicSemester.interface';
import { Academic_Semester } from './academicSemester.schema';

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Invalid Code! Please Select Proper Code.'
    );
  } //
  else {
    const result = await Academic_Semester.create(payload);
    return result;
  }
};

export const AcademicSemesterService = {
  createSemester,
};
