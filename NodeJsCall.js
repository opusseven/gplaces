const https = require('https');
//require('dotenv').config()
//require('dotenv').config()
 
//const key = process.env.API_KEY
//console.log("key",key)

//_EXTERNAL_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.663918,-73.8820044&radius=2500&type=restaurant&keyword=drinks&key=AIzaSyCK6gxSNMARSqZ0-sl4em1GS2bBE-21b4E';

//APICALL = 'https://test-proj-heroku.herokuapp.com/api/plans'
//const candy = `${_EXTERNAL_URL}`

const callExternalApiUsingHttp = (callback) => {
    https.get(APICALL, (resp) => {
    let data = '';
    
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });
    
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        return callback(data);
       // console.log(JSON.stringify(data));
    });
    
    }).on("error", (err) => {
       
    console.log("Error: " + err.message);
    });
}

module.exports.callApi = callExternalApiUsingHttp;