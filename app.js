'use strict'
//Routing refers to how an application’s endpoints (URIs) respond to client requests
//Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

const morgan = require('morgan')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./routes');
const nunjucks = require('nunjucks')

app.engine('html', nunjucks.render); // how to render html templates
app.set('view engine', 'html'); // what file extension do our templates have
nunjucks.configure('views', { noCache: true }); // where to find the views, caching off

app.use(bodyParser.urlencoded({ extended: true }))
// for HTML form submits

//req.body
app.use(bodyParser.json()) // would be for AJAX requests
app.use(morgan('dev'));


app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message);
});

app.listen(3001, function(){
console.log("listening on port 3001")})
