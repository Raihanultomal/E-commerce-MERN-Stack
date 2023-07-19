const bcrypt = require('bcrypt');
const { Schema, model } = require('mongoose');
const { defaultImagePath } = require('../secret');

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'user name is required'],
      trim: true,
      minlength: [3, 'minimum 3 charachters have to provide'],
      maxlength: [31, 'maximum 31 character you can give'],
    },
    email: {
      type: String,
      required: [true, 'user email is required'],
      trim: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: 'please enter a valid email',
      },
      // validate: {
      //   validator: () => Promise.resolve(false),
      //   message: 'Email validation failed'
      // }
    },
    password: {
      type: String,
      required: [true, 'user password is required'],
      minlength: [5, 'minimum 5 charachters have to provide'],
      set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10)), // password hassing kora holo. genSaltSync(10) diye bujacce 10 time hassing kora hobe
    },
    image: {
      type: String,
      default: defaultImagePath,
    },
    address: {
      type: String,
      required: [true, 'user address is required'],
      minlength: [3, 'minimum 3 charachters have to provide'],
      maxlength: [31, 'maximum 31 character you can give'],
    },
    phone: {
      type: String,
      required: [true, 'user phone is required'],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = model('Users', userSchema);
module.exports = User;
