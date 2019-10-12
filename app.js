const apiCallFromRequest = require('./Request')
const apiCallFromNode = require('./NodeJsCall')

const http = require('http')
// let sourceFile = require('./server.js');
// var name = sourceFile.name
// console.log("age",name)




http.createServer((req, res) => {
        if(req.url === "/dday"){
            apiCallFromRequest.callApi(function(response){
                //console.log(JSON.stringify(response));
                res.write(JSON.stringify(response));
                res.end();
            });
        }
        else if(req.url === "/node"){
            apiCallFromNode.callApi(function(response){
                res.write(response);
                res.end();
            });
        }
        
         //res.end();
}).listen(3001);

console.log("service running on 3001 port....");