const mongoose = require("mongoose");
const { Schema } = mongoose;

const url = "mongodb://localhost:27017/usersdb";

const userSchema = new Schema({
  name: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

const connectMongoDB = async () => {
  try {
    await mongoose.connect(url);
  } catch (e) {
    console.log(e);
  }
};

const closeMongoDB = async () => {
  try {
    await mongoose.connection.close();
  } catch (e) {
    console.log(e);
  }
};

const insertUser = async (user) => {
  try {
    const newUser = new User(user);
    const savedUser = await newUser.save();
    return savedUser;
  } catch (e) {
    console.log(e);
  }
};

const getUser = async (id) => {
  try {
    return await User.findById(id);
  } catch (e) {
    console.log(e);
  }
};

const getUsers = async () => {
  try {
    return await User.find({});
  } catch (e) {
    console.log(e);
  }
};

const removeUserByName = async (id) => {
  try {
    await User.findByIdAndDelete(id);
  } catch (e) {
    console.log(e);
  }
};

const removeAllUsers = async () => {
  try {
    await User.deleteMany({});
  } catch (e) {
    console.log(e);
  }
};

const updateUser = async (user) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(user._id, user, {
      new: true,
    });
    return updatedUser;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  connectMongoDB,
  closeMongoDB,
  insertUser,
  getUser,
  getUsers,
  removeUserByName,
  updateUser,
  removeAllUsers,
};
