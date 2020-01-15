var http = require('http');
var fs = require('fs');
  
http.createServer(function (request, response) {
    // HTML 파일을 읽어 응답 만들기
    fs.readFile('./html/test_res.html', function(error, data) {
        if (error) {
            console.log(error.message);
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
        }
    });
    
}).listen(1234, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1234');

