const axios = require('axios');

const $host = axios.create({
    baseURL: process.env.URL_SERVICE_API
});

module.exports = {
    $host
};
