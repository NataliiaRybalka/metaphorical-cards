import { model, Schema } from 'mongoose';

const InternalCompassSchema = new Schema(
  {
    image: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default model('Internal Compass', InternalCompassSchema);