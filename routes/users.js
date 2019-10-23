var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var users = [{'name': 'thomas', 'pass': '1234'},{'name': 'thomas2', 'pass': '12342' }, {'name': 'thomas3', 'pass': '12343' }]
  res.send(users);
});

module.exports = router;
