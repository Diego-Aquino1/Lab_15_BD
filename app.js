
const express = require('express');
const app = express();

const port = process.env.PORT || 8000;

const mongoose = require('mongoose');

const uri = `mongodb+srv://diego:blog@cluster0.va5uo.mongodb.net/Blog?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('conectado a mongodb')) 
  .catch(e => console.log('error de conexión', e))


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/', require('./router'))
