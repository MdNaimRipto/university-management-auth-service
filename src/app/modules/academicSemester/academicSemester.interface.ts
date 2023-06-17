import { Model } from 'mongoose';

export type SemesterTitle = 'Autumn' | 'Summer' | 'Fall';

export type SemesterCode = '01' | '02' | '03';

export type SemesterMonth =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type IAcademicSemester = {
  title: SemesterMonth;
  year: number;
  code: SemesterCode;
  startMonth: SemesterMonth;
  endMonth: SemesterMonth;
};

export type AcademicSemesterModel = Model<IAcademicSemester>;
