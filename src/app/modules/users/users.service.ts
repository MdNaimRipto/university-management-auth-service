import config from '../../../config';
import { IUsers } from './users.interface';
import { Users } from './users.schema';
import { generateUserID } from './users.utils';
import ApiError from '../../../errors/ApiError';

const createUser = async (user: IUsers): Promise<IUsers | null> => {
  const id = await generateUserID();
  user.id = id;

  if (!user.password) {
    user.password = config.default_user_pass as string;
  }
  const createUser = await Users.create(user);
  if (!createUser) {
    throw new ApiError(400, 'Failed to Create User! Please Try Again.');
  } else {
    return createUser;
  }
};

export const UserService = {
  createUser,
};
