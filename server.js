var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(302, { 'Location': 'https://cs.dongduk.ac.kr'});
    response.end();
}).listen(1234, function() {
    console.log('Server running at http://127.0.0.1:1234');
});