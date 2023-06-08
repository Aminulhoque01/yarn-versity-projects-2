import express from 'express';
import { UserRouters } from '../modules/user/user.route';
import { AcademicSemesterRoute } from '../modules/academicSemester/academicSemester.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRouters,
  },
  {
    path: '/academic-semester',
    route: AcademicSemesterRoute,
  },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
