//This is an example of a non blocking server (manner of writing code)

var http = require('http')
var fs = require('fs') //fs is a module that lets you read external files.


// http.createServer(function(request, response) {
//   response.writeHead(200);
//   response.write("Dog is running...")
//   setTimeout(function() { //after the server recieves the request, it waits then continues to do work
//     response.write("Dog is finished running");
//     response.end(); //ends connection (closes it)
//   }, 5000); //This is the amount of seconds (in millisecons of the wait time before the request keeps running)
// }).listen(8080); //listens on 8080
// console.log("Listening on http://localhost:8080")

//This is an example of Hello Dog, reading it straight from an HTML file.


http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'}); //Adding this content type parameter to the head allows node to host this as an html file and not plain text
  fs.readFile('index.html', function(error, contents) {
    response.write(contents);
    response.end();
  });
}).listen(8080);
console.log("Listening on http://localhost:8080")
