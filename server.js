var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
 
http.createServer(function (request, response) {
    if (request.method == 'GET') {
        fs.readFile('./html/login.html', function (error, data) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
        });
    } else if (request.method == 'POST') {
        request.on('data', function(data) {
            var text = "";
            text += data;
            var parsedStr = querystring.parse(text, '&', '=');
            // console.log(parsedStr.id);
            // console.log(parsedStr.pwd);

            if (parsedStr.id == parsedStr.pwd) {
                response.writeHead(302, { 'Location': 'https://cs.dongduk.ac.kr'});
                response.end();
            } else {
                fs.readFile('./html/login_failed.html', function (error, file_data) {
                    response.writeHead(200, {'Content-Type': 'text/html'});
                    response.end(file_data);
                });
            }
        });
    }
}).listen(1234, function() {
    console.log('Server running at http://127.0.0.1:1234');
});
