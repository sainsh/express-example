const express = require('express')
const app = express()
const port = 1337


app.post('/loginY', (req, res) =>
console.log(`user ${req.user} tried to log on`)
if(auth(req.user, req.pass)) {
res.send()
} else{
res.send("wrong username or password") 
} 
 )

auth(user, pass) 
