const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const itemSchema = require('./Items');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      validate: {
        len: [3]
    }
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
      validate: {
        len: [5]
    }
    },
    password: {
      type: String,
      allowNull: false,
      required: true,
      validate: {
        len: [8]
    }
    },
    phone: {
      type: String,
      required: true,
      match: [/^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
        , 'Must use a valid phone number'],
    },
    location: {
      type: String,
      required: true,
      validate: {
        len: [10]
    }
    },
    // set savedItems to be an array of data that adheres to the bookSchema
    savedItems: [itemSchema],
    //donation that user is making
    donation: [itemSchema]
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};



const User = model('User', userSchema);

module.exports = User;
