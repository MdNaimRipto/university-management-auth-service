import { Schema, model } from 'mongoose';
import httpStatus from 'http-status';
import {
  IAcademicSemester,
  AcademicSemesterModel,
} from './academicSemester.interface';
import {
  semesterCode,
  semesterMonths,
  semesterTitle,
} from './academicSemester.constant';
import ApiError from '../../../errors/ApiError';

const semesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: semesterTitle,
    },
    year: { type: Number, required: true },
    code: {
      type: String,
      required: true,
      enum: semesterCode,
    },
    startMonth: {
      type: String,
      required: true,
      enum: semesterMonths,
    },
    endMonth: {
      type: String,
      required: true,
      enum: semesterMonths,
    },
  },
  {
    timestamps: true,
  }
);

semesterSchema.pre('save', async function (next) {
  const isExist = await Academic_Semester.findOne({
    title: this.title,
    year: this.year,
  });
  if (isExist) {
    throw new ApiError(httpStatus.CONFLICT, 'Semester Already Exists!');
  }
  next();
});

export const Academic_Semester = model<
  IAcademicSemester,
  AcademicSemesterModel
>('Academic_Semester', semesterSchema);
