const express = require('express');
const app = express();
const PORT = process.eventNames.port || 5000;

app.get("/", (req, res) => {
    res.send("Welcome to ShopEasy! from HK");
})

const server = app.listen(PORT,() => {
    console.log('Server is running on port ${PORT}');
})

module.exports = {app,server}