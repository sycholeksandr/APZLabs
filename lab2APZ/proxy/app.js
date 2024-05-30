const express = require('express');
const axios = require('axios');

const app = express();

const PORT = 3001;

app.use('/', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3000/');
        res.send(response.data);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
