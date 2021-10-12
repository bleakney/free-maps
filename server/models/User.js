const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true     
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address']
    
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    // phone: {
    //   type: String,
    //  // required: true,
    //   match: [/^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/    , 'Must use a valid phone number']
    // },
    // location: {
    //   type: String,
    //  // required: true,
     
    // },
    // set savedItems to be an array of data that adheres to the ItemsSchema
    savedItems: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Item'
      }
    ],
    postedItems: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Item'
      }
    ],
    //donation that user is making that adhere to the itemSchemas
    // donation: [itemSchema]
  },
  // set this to use virtual below
  // {
  //   toJSON: {
  //     virtuals: true,
  //   },
  // }
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
