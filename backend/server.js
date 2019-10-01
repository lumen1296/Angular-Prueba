const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./DB');


const userRoute = require('./routes/user.route');
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => { console.log('Base de datos conectada') },
    err => { console.log('No se logro conectar a la base de datos' + err) }
);

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/users', userRoute);
const port = process.env.PORT || 4000;

const server = app.listen(port, function () {
    console.log('Escuchando en el puerto ' + port);
});