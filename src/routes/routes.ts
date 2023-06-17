import express from 'express';
import userRouter from '../app/modules/users/users.router';
import semesterRouter from '../app/modules/academicSemester/academicSemester.router';

const router = express.Router();

const routes = [
  {
    path: '/users',
    route: userRouter,
  },
  {
    path: '/semesters',
    route: semesterRouter,
  },
];

routes.map(r => router.use(r.path, r.route));

export default router;
