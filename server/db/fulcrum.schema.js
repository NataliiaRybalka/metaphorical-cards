import { model, Schema } from 'mongoose';

const FulcrumSchema = new Schema(
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

export default model('Fulcrum', FulcrumSchema);