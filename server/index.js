const express = require('express');
const config = require('dotenv').config();

if (config.error) throw "An error ocurred with the .env file";

const app = express();

app.use(express.static('public'));

app.get('/saludo', (req, res) => {
    res.send('Hola perrotes');
})

app.listen(process.env.PORT, () => {
    console.log('Server initiated on port: ', process.env.PORT);
});
