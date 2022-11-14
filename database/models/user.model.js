import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'The email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    validator(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid email');
      }
    }
  },
  password: {
    required: [true, 'The password is required'],
    type: String,
    trim: true,
  },
  firstname: {
    type: String,
    maxlength: 150,
    trim: true,
    default: 'Your lastname',
  },
  lastname: {
    type: String,
    maxlength: 150,
    trim: true,
    default: 'Your lastname',
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;