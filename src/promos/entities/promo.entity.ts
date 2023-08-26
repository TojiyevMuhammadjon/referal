import { Schema, model, Document, ObjectId } from 'mongoose';

export interface IPromo extends Document {
  promo: string;
  companyId: ObjectId;
  userId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export const promo = new Schema<IPromo>(
  {
    promo: {
      type: String,
      required: true,
    },
    companyId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const PromoSchema = model<IPromo>('Promo', promo);
