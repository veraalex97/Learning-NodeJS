//call the http library (this is needed to start the server)
//everything in js is held in a variable first to make this work

// var http = require('http');//How we require modules

//this calls the createServer method within the http module in order to create our server.
//we need 2 parameters when calling the createServer function (request, response)
// http.createServer(function(request,response) {
//   response.writeHead(200); //This is the header (200 code)
//   response.write("Hello, this is dog."); //This writes to our body (Response Body)
//   response.end(); //This ends the connection(closes it)
// }).listen(8080); //This is required to listen to this connection on this port.
// console.log("Listening on port 8080...")


var http = require('http');

// http.createServer(function(request, response) {
//   response.writeHead(200);
//   response.write("Hello World");
//   response.end();
// }).listen(8080);
// console.log("Listening on http://localhost:8080");

//This is an example of a non blocking server (manner of writing code)

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write("Dog is running...")
  setTimeout(function() { //after the server recieves the request, it waits then continues to do work
    response.write("Dog is finished running");
    response.end(); //ends connection (closes it)
  }, 5000); //This is the amount of seconds (in millisecons of the wait time before the request keeps running)
}).listen(8080); //listens on 8080
console.log("Listening on http://localhost:8080")
