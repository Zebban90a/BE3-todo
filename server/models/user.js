const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const { Schema } = mongoose;
const UserDetail = new Schema({
  username: String,
  password: String,
});

UserDetail.plugin(passportLocalMongoose);
module.exports = mongoose.model('userInfo', UserDetail);
