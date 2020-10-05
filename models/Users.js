'use strict';

const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    //set create date to time created
  create_date: Date,
  first_name: String,
  last_name: String,
  user_name: {
      type: String,
      unique: true,
      trim: true, 
  },
  password: {
      type: String,
      trim: true, 
      validate: [({password}) => password.length >= 6, `Password must be at least six characters`]
  }
});

module.exports = mongoose.model(`Users`, UserSchema);