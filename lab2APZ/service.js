const axios = require('axios');
require('dotenv').config();

const API_URL = process.env.API_URL;

async function getData() {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw error;
    }
}

module.exports = { getData };
