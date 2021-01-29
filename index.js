const express = require('express');
const config = require('./config');

const app = express();

// app metodo ruta funcion(req, res)
app.get('/', function(req, res) {
    res.send('Hello');
})

app.get('/json', function(req, res) {
    res.send('Hello world');
})

app.listen(config.port, () => {
    console.log(`Listening http://localhost:${config.port}`);
})