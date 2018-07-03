const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//conecta ao bd
mongoose.connect('mongodb://blog:desafio2018@ds121871.mlab.com:21871/m_blog');

//carrega os models
const autor = require('./models/autor');

//Carrega as rotas
const index = require('./routers/index');
const autor_routers = require('./routers/autor_routers');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', index);
app.use('/autor', autor_routers);

module.exports = app;