var http = require('http'),
    httpProxy = require('http-proxy');


// Create a proxy server with custom application logic

var proxy = httpProxy.createProxyServer({});

//var proxy = httpProxy.createProxyServer(function(req,res,proxy){
//    proxy.on('error', function(err,req, res){
//    	if(err) console.log(err);
//	res.writeHead(500);
//	res.end('Something is wrong here...');
//    });
//});

// Create your custom server and just call `proxy.web()` to proxy
// a web request to the target passed in the options
// also you can use `proxy.ws()` to proxy a websockets request
//
var server = http.createServer(function(req, res) {
    // You can define here your custom logic to handle the request
    // and then proxy the request.
    
    //We need to add CORS enablement here
	
    proxy.web(req, res, { 
	//target: 'http://www.yahoo.com' 
    	target: "http:/camel-dev-01.remedysystems.com:8082"
    }, function(e,req,res){
    	if(e) console.log(e);
	res.writeHead(500);
	res.end("Something is wrong here...");
    });
});

console.log("listening on port 8000")
server.listen(8000);
