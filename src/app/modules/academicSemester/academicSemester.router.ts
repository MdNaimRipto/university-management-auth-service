import express from 'express';
import validateRequest from '../../../middleware/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';
import { AcademicSemesterController } from './academicSemester.controller';

const router = express.Router();

router.post(
  '/createSemester',
  validateRequest(AcademicSemesterValidation.createSemesterZodSchema),
  AcademicSemesterController.createSemester
);

export default router;
