import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export const users: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const UserSchema = model<IUser>('User', users);
