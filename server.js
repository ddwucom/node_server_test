var http = require('http');
var fs = require('fs');
var url = require('url');
 
http.createServer( function (request, response) {
    var pathName = url.parse(request.url).pathname;
    if (pathName == '/') {
        fs.readFile('./html/index.html', function(error, data) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
        });
    } else if (pathName == '/second') {
        fs.readFile('./html/second_page.html', function(error, data) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
        });
    }
}).listen(1234, function() {
    console.log('Server running at http://127.0.0.1:1234');
});