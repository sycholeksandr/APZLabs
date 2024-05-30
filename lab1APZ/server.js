//server.js
require('dotenv').config();
const express = require('express');
const sendResp = express();

sendResp.get("/", (req, res) => {
    res.send(process.env.HELLO);
});
sendResp.get("/user", (req, res) => {
    res.send({ name: process.env.NAME, age: process.env.AGE });
});

sendResp.listen(3000);

module.exports = sendResp;
