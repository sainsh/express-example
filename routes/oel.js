var express = require('express');
var router = express.Router();
const fs = require('fs')

var oeljson = 'https://localhost:3000/public/json/oel.json'


router.get('/', function(req, res, next) {
    var oelJson = JSON.parse(fs.readFileSync('public/json/oel.json'))


    res.render('oel', {oel : oelJson})

})



module.exports = router;
