import { Schema, model, Document } from 'mongoose';

export interface ICompany extends Document {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export const company: Schema<ICompany> = new Schema(
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

export const CompanySchema = model<ICompany>('Company', company);
