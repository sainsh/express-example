var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var oel = [
        {'navn': 'hobgoblin', 'smag': 'rugbrød', 'vol' : '5.0'},
        {'navn': 'black wych', 'smag': 'rugbrød plus bær', 'vol' : '5.4'},
        {'navn': 'gingerbeard', 'smag': 'ingefær', 'vol' : '5.0'} ];

  res.render('oel', { title: 'Øl', oel1: ` navn: ${oel[0].navn}, smag: ${oel[0].smag}, vol: ${oel[0].vol}` ,
   oel2:` navn: ${oel[1].navn}, smag: ${oel[1].smag}, vol: ${oel[1].vol}`,
    oel3: ` navn: ${oel[2].navn}, smag: ${oel[2].smag}, vol: ${oel[2].vol}`});
});


module.exports = router;
