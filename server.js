var http = require('http');
var fs = require('fs');
 
http.createServer(function (request, response) {
    // Image File Read
    fs.readFile('./img/diet.jpg', function(error, data) {
        if (error) {
            console.log(error.message);
        } else {
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.end(data);
        }
    });
}).listen(1234, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1234');