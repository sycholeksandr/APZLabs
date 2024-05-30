const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const jsonParser = express.json();
const {
  connectMongoDB,
  closeMongoDB,
  getUsers,
  getUser,
  insertUser,
  removeUserByName,
  updateUser,
  removeAllUsers,
} = require("./mongo");

const host = process.env.API_URL;
const port = process.env.API_PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/api/users", async (req, res) => {
  await connectMongoDB();
  const users = await getUsers();
  await closeMongoDB();
  res.json(users);
});

app.get("/api/users/:id", async (req, res) => {
  await connectMongoDB();
  const user = await getUser(req.params.id);
  await closeMongoDB();
  res.json(user);
});

app.post("/api/users", jsonParser, async (req, res) => {
  await connectMongoDB();
  await insertUser(req.body);
  await closeMongoDB();
  res.json(req.body);
});

app.delete("/api/users/", async (req, res) => {
  await connectMongoDB();
  await removeAllUsers();
  await closeMongoDB();
  res.json({ message: "All users removed" });
});

app.delete("/api/users/:id", async (req, res) => {
  await connectMongoDB();
  await removeUserByName(req.params.id);
  await closeMongoDB();
  res.json({ message: "User removed", _id: req.params.id });
});

app.put("/api/users/", jsonParser, async (req, res) => {
  await connectMongoDB();
  const response = await updateUser(req.body);
  await closeMongoDB();
  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running at ${host}:${port}`);
});
