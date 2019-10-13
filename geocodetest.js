var NodeGeocoder = require('node-geocoder');
 
var options = {
  provider: 'google',
 
  // Optional depending on the providers
  httpAdapter: 'https', // Default
  apiKey: 'AIzaSyBwkhsHJMjP2QcuqaGhLEJgTOePgbTYzDk', // for Mapquest, OpenCage, Google Premier
  formatter: null         // 'gpx', 'string', ...
};
 
var geocoder = NodeGeocoder(options);


geocoder.geocode('Brownsville Brooklyn', function(err, res) {
   // console.log(res);
    let location = res
    console.log(location[0].latitude,location[0].longitude)
  });