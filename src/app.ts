// eslint-disable-next-line @typescript-eslint/no-unused-vars
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';

const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Application routes

// app.use('/api/v1/users', UserRouters);
// app.use('/api/v1/academic-semester', AcademicSemesterRoute);

app.use('/api/v1/', routes);

//testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   // Promise.reject(new Error('Unhaled promise Rejection'))
//   // console.log(x)
//   //   throw new Error('testing error loger')
//   next('error');
// });

// Global error handler

app.use(globalErrorHandler);

export default app;
