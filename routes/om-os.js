var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('om-os', { title: 'Om os', hobgoblin: 'images/hobgoblin.jpg', blackwych: 'images/blackwych.jpg', gingerbeard: 'images/gingerbeard.jpg' });
  });


  module.exports = router;