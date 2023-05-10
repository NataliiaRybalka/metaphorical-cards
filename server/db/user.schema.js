import { model, Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    }
  },
  { timestamps: true }
);

export default model('User', UserSchema);