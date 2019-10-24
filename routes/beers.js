var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function (req, res, next) {
    var beers = JSON.parse(fs.readFileSync('public/json/oel.json'))
    res.send(beers)
});

router.post('/', function (req, res, next) {

    var beer = req.body;

    fs.readFile('public/json/oel.json', function (err, data) {

        var json = JSON.parse(data);
        json.push(beer)
        fs.writeFileSync('public/json/oel.json', JSON.stringify(json))
        res.send(`${JSON.stringify(beer)} \n er nu tilføjet`)
    })
});

router.get('/:id', function (req, res, next) {
    var beers = JSON.parse(fs.readFileSync('public/json/oel.json'));
    var id = req.path.slice(1);
    if (id >= beers.length) {
        res.status(404).send(`could not find the beer you're looking for`)
    } else {

    res.send(beers[id]);
    }
})

router.put('/:id', function (req, res, next) {
    var id = req.path.slice(1)
   

    var beers = JSON.parse(fs.readFileSync('public/json/oel.json'));
    if (id >= beers.length) {
        res.status(404).send(`could not find the beer you're looking for`)
    } else {
        var beer = req.body
        beers[id] = beer


        fs.writeFileSync('public/json/oel.json', JSON.stringify(beers))
        res.send(`${JSON.stringify(beer)} \n øl nummer ${id} er nu opdateret`)
    }
})

router.delete('/:id', function(req, res, next){
    var id = req.path.slice(1)
    var beers = JSON.parse(fs.readFileSync('public/json/oel.json'));

    if (id >= beers.length) {
        res.status(404).send(`could not find the beer you're looking for`)
    } else {
        var beer = beers[id];
        beers = beers.filter(function(value, index, arr){
            return index != id;
        })

        fs.writeFileSync('public/json/oel.json', JSON.stringify(beers))
        res.send(`${JSON.stringify(beer)} \n øl nummer ${id} er nu slettet`)
    }

})




module.exports = router;