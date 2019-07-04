const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/saludo', (req, res) => {
    res.send('Hola perrotes');
})

app.listen(3000, (port) => {
    console.log('Server initiated on port: ', port);
});
