var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Øl-siden', besked: 'Det er en god dag til en øl!' });
});


module.exports = router;
