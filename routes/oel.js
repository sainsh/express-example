var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var oel = [
        {'navn': 'hobgoblin', 'smag': 'rugbrød', 'vol' : '5.0'},
        {'navn': 'black wych', 'smag': 'rugbrød plus bær', 'vol' : '5.4'},
        {'navn': 'gingerbeard', 'smag': 'ingefær', 'vol' : '5.0'} ];
  res.render('index', { title: 'Øl', oel: oel });
});


module.exports = router;
