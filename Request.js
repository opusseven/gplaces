

const request = require('request');
require('dotenv').config()
const KEY = process.env.API_KEY
console.log(KEY)






_EXTERNAL_URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.663918,-73.8820044&radius=2500&type=food&keyword=pizza&key=${KEY}`;



const callExternalApiUsingRequest = (callback) => {
    request(_EXTERNAL_URL, { json: true }, (err, res, body) => {
    if (err) { 
        return callback(err);
     }
     
     
    return callback(body);
    });
}

module.exports.callApi = callExternalApiUsingRequest;