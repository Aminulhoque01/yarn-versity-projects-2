import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
// import { studentController } from './studentController';
import { StudentValidation } from './student.validation';
import { StudentController } from './studentController';

const router = express.Router();

router.get('/:id', StudentController.getSingleStudent);
router.get('/', StudentController.getAllStudents);
router.delete('/:id', StudentController.deleteStudent);

router.patch(
  '/:id',
  validateRequest(StudentValidation.updateStudentZodSchema),
  StudentController.updatedStudent
);

export const StudentRouters = router;
