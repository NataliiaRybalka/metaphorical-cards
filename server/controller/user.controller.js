import bcrypt from 'bcrypt';
import UserSchema from '../db/user.schema.js';

export const getUser = async (req, res) => {
  const { email, password } = req.query;

  try {
    const user = await UserSchema.findOne({ email });
    if (!user) throw new Error('Wrond email or password');
    
    const compared = await bcrypt.compare(password, user.password);
    if (!compared) throw new Error('Wrond email or password');

    const result = {}
    for (const key in user) {
      if (key === 'email' || key === '_id' || key === 'createdAt' || key === 'updatedAt') result[key] = user[key]
    }

    res.status(200).json(result);
  } catch (e) {
    res.status(400).json(e.message);
  }
};
