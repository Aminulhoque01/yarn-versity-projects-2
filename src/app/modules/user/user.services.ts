import config from '../../../config/index';
import ApiError from '../../../errors/ApiError';
import { IUser } from './user.initerface';
import { User } from './user.model';
import { generateUserId } from './user.utils';
// import { IUser } from './users.interface'
// import { User } from './users.model'
// import { generateUserId } from './users.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  //auto generated incremental id
  //default password
  const id = await generateUserId();

  user.id = id;

  if (!user.password) {
    user.password = config.default_student_pass as string;
  }

  const createdUser = await User.create(user);

  if (!createUser) {
    throw new ApiError(400, 'Failed to create user');
  }
  return createdUser;
};

export const UserServices = {
  createUser,
};
