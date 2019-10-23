var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', besked: 'Det er en god dag!' });
});

router.get('/users', function(req,res, next){
  res.send(JSON.stringify("[{name: 'thomas', pass: '1234' },{name: 'thomas2', pass: '12342' }, {name: 'thomas3', pass: '12343' }]"))
});

module.exports = router;
