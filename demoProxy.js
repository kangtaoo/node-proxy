var http = require('http'),
    httpProxy = require('http-proxy');

var host = "http://camel-dev-01.remedysystems.com:8082";

var proxy = httpProxy.createProxyServer({});

var server = http.createServer(function(req,res){
    proxy.web(req, res, {
	target: host
    });
});

console.log("listening on port 8000");
server.listen(8000);
