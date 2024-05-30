// підключення express
const express = require("express");
// створюємо об’єкт додатка
const app = express();
// визначаємо обробник для маршруту "/"
app.get("/", (request, response) => {

    // відправляємо відповідь
    response.send(sendResp());
});
// починаємо прослуховувати підключення на 3000 порту
app.listen(3000);

function sendResp() {
    return "<h2>Hello World!</h2>";
}
module.exports = sendResp;