const request = require('request');
const fetch = require("node-fetch");

require('dotenv').config()
const KEY = process.env.API_KEY
console.log(KEY)


let sourceFile = require('./server.js');
var name = sourceFile.name
console.log("age",name)



_EXTERNAL_URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.663918,-73.8820044&radius=2500&type=${name}&keyword=fitness&key=${KEY}`;
//_EXTERNAL_URL = 'https://test-proj-heroku.herokuapp.com/api/plans';

const callExternalApiUsingRequest = (callback) => {
    request(_EXTERNAL_URL, { json: true }, (err, res, body) => {
    if (err) { 
        return callback(err);
     }
     console.log("piza",name);
     
    return callback(body);
    });
}

module.exports.callApi = callExternalApiUsingRequest;