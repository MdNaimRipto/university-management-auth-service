import {
  SemesterCode,
  SemesterMonth,
  SemesterTitle,
} from './academicSemester.interface';

export const semesterTitle: SemesterTitle[] = ['Autumn', 'Summer', 'Fall'];

export const semesterCode: SemesterCode[] = ['01', '02', '03'];

export const semesterMonths: SemesterMonth[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const academicSemesterTitleCodeMapper: {
  [key: string]: string;
} = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};
