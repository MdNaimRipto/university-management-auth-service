import { Model } from 'mongoose';

export type IUsers = {
  id: string;
  role: string;
  email: string;
  password: string;
};

export type UserModel = Model<IUsers, object>;
