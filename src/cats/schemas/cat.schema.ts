import * as mongoose from 'mongoose';

export const CatSchema = new mongoose.Schema({
  name: String,
  age: String,
  sex: String,
  remarks: String,
});
