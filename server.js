const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const request = require('request');

require('dotenv').config()
const API_KEY = process.env.API_KEY
console.log("key",API_KEY)


var NodeGeocoder = require('node-geocoder');
var options = {
    provider: 'google',
   
    // Optional depending on the providers
    httpAdapter: 'https', // Default
    apiKey: process.env.API_KEY, // for Mapquest, OpenCage, Google Premier
    formatter: null         // 'gpx', 'string', ...
  };

 var geocoder = NodeGeocoder(options);

//_EXTERNAL_URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.663918,-73.8820044&radius=2500&type=food&keyword=fitness&key=${API_KEY}`;


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('An alligator approaches!');
});

// geocoder.geocode('Brownsville Brooklyn', function(err, res) {
//     // console.log(res);
//      let location = res
//      console.log(location[0].latitude,location[0].longitude)
//    });

app.get('/ruckus/:info/locale/:area',(req, res) => {

LATLON = [];
    geocoder.geocode(req.params.area, function(err, res) {
        // console.log(res);
        let location = res
        console.log('dddd',location[0].latitude,location[0].longitude)
        let LATLON = 'dddddd'
        
    });
   
    console.log('LATLON IS',LATLON)


    _EXTERNAL_URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.663918,-73.8820044&radius=2500&type=${req.params.info}&keyword=${req.params.info}&key=${API_KEY}`;

    console.log("reqs",req.params.info,req.params.area)
    
    request(_EXTERNAL_URL, function (error, response, body) {
        console.log('LATLON IS',LATLON)
  if (!error && response.statusCode == 200) {
   // console.log(body) 
    res.send(body) 
  }
});
})


app.post('/dyno',(req, res) => {
   // console.log(req.body)
    request(_EXTERNAL_URL, function (error, response, body) {
      if (!error && response.statusCode == 200) {
       // console.log(req.body) 
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

