# express-example
 For at bruge det kan du sende requests til siden "/api/beers/" <br>
 For at hente alle øl: send en GET request til "/api/beers"<br>
 For at tilføje en øl: send en POST request til "/api/beers" med et JSON objekt på denne form {"navn": "navn", "smag": "smag", "vol": "vol", "img": "/images/(navn).jpg"} (billede vil blive fundet senere)<br>
 For at hente en bestemt øl: send en GET request med id til "/api/beers/:id"<br>
 For at ændre en øl: send en PUT request med id til "/api/beers/:id" med hele JSON objektet<br>
 For at fjerne en øl: send en DELETE request med id til "/api/beers/:id"<br>
