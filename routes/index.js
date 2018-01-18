var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.render("index")
})

router.get('/form', function(req, res, next){
  res.render("form")
})

router.post('/form',function(req,res, next){
  console.log("WHAT AM I? ",req.body)
  res.render("name", {name: req.body.name} )
})
module.exports = router
