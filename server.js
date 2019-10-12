const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const request = require('request');
const KEY = process.env.API_KEY
const apiCallFromRequest = require('./Request')

_EXTERNAL_URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.663918,-73.8820044&radius=2500&type=gyms&keyword=fitness&key=${KEY}`;
// var name = "gyms";

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('An alligator approaches!');
});

app.get('/ruckus',(req, res) => {
request(_EXTERNAL_URL, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
    res.send(body) 
  }
});
})


app.post('/dyno',(req, res) => {
    console.log(req.body)
    request(_EXTERNAL_URL, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(req.body) 
        res.send(body) 
      }
    });
    })

// app.post('/dyno', function(request, response){
//     console.log("hi");
//     console.log("friendx");
//     console.log(request.body.age)
//     console.log(request.body.gender)
   
//     response.end()

// });


app.listen(3005, () => console.log('Gator app listening on port 3005!'));

//exports.name = name;

