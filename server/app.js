const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.resolve(__dirname, '../', 'build')));

const indexFilePath = path.resolve(__dirname, '../', 'build', 'index.html');

app.get('/endpoints', (req, res) => {
    res.json({
        apiGatewayHost: process.env.POOLRANKING_API_GATEWAY_SERVICE_HOST,
        apiGatewayPort: process.env.POOLRANKING_API_GATEWAY_SERVICE_PORT
    });
});

app.get('/*', (req, res) => {
    res.sendFile(indexFilePath);
});

module.exports = app;
