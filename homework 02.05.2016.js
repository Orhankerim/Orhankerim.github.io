var http = require('http');
var events = require('events');
var eventEmitter = new events.EventEmitter();
var beep = function beep ()
{
  console.log('beep beep');
  }
setTimeout(function(request,response) {
  console.log('Alo');
}, 2000);
setTimeout(function(){
  console.log('Who are you?');
},6000);
eventEmitter.on('Entrance', beep);

eventEmitter.emit('Entrance');
http.createServer(function(request, response) {
    response.writeHead(200);
    response.write(JSON.stringify(request.headers));
    // request.pipe(response);
    response.end();
}).listen(8080)

