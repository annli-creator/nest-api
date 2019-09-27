import { Document } from 'mongoose';

export interface Cat extends Document {
  _id: string;
  name: string;
  age: string;
  sex: string;
  remarks: string;
}
