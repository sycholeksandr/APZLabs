const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url);

const connectMongoDB = async () => {
  try {
    await mongoClient.connect();
  } catch (e) {
    console.log(e);
  }
};

const closeMongoDB = async () => {
  try {
    await mongoClient.close();
  } catch (e) {
    console.log(e);
  }
};

const insertUser = async (user) => {
  try {
    const db = mongoClient.db("usersdb");
    const collection = db.collection("users");
    await collection.insertOne(user);
  } catch (e) {
    console.log(e);
  }
};

const getUser = async (id) => {
  try {
    const db = mongoClient.db("usersdb");
    const collection = db.collection("users");
    return await collection.findOne({ _id: ObjectId.createFromHexString(id) });
  } catch (e) {
    console.log(e);
  }
};

const getUsers = async () => {
  try {
    const db = mongoClient.db("usersdb");
    const collection = db.collection("users");
    return await collection.find({}).toArray();
  } catch (e) {
    console.log(e);
  }
};

const removeUserByName = async (id) => {
  try {
    const db = mongoClient.db("usersdb");
    const collection = db.collection("users");
    await collection.deleteOne({ _id: ObjectId.createFromHexString(id) });
  } catch (e) {
    console.log(e);
  }
};

const removeAllUsers = async () => {
  try {
    const db = mongoClient.db("usersdb");
    const collection = db.collection("users");
    await collection.deleteMany({});
  } catch (e) {
    console.log(e);
  }
};

const updateUser = async (user) => {
  try {
    const db = mongoClient.db("usersdb");
    const collection = db.collection("users");

    const userId = user._id;
    delete user._id;

    const response = await collection.findOneAndUpdate(
      { _id: ObjectId.createFromHexString(userId) },
      { $set: user },
      { returnDocument: "after" }
    );

    return response;
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
