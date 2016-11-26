//This is an example of a non blocking server (manner of writing code)

var http = require('http')


http.createServer(function(request, response) {
  response.writeHead(200);
  response.write("Dog is running...")
  setTimeout(function() { //after the server recieves the request, it waits then continues to do work
    response.write("Dog is finished running");
    response.end(); //ends connection (closes it)
  }, 5000); //This is the amount of seconds (in millisecons of the wait time before the request keeps running)
}).listen(8080); //listens on 8080
console.log("Listening on http://localhost:8080")
