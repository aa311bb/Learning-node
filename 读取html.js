var http=require('http');
var fs=require('fs');

var server =http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    var myReadStream=fs.createReadStream('./index.html','utf8');
    myReadStream.pipe(res);
})

server.listen(3001,'127.0.0.1');

console.log('server is running...')
