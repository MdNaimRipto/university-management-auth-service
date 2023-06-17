import { z } from 'zod';
import {
  semesterCode,
  semesterMonths,
  semesterTitle,
} from './academicSemester.constant';

const createSemesterZodSchema = z.object({
  body: z.object({
    semester: z.object({
      title: z.enum([...semesterTitle] as [string, ...string[]], {
        required_error: 'Title is Required',
      }),
      year: z.number({
        required_error: 'Year is Required',
      }),
      code: z.enum([...semesterCode] as [string, ...string[]], {
        required_error: 'Code is Required',
      }),
      startMonth: z.enum([...semesterMonths] as [string, ...string[]], {
        required_error: 'Start Month is Required',
      }),
      endMonth: z.enum([...semesterMonths] as [string, ...string[]], {
        required_error: 'End Month is Required',
      }),
    }),
  }),
});

export const AcademicSemesterValidation = {
  createSemesterZodSchema,
};
