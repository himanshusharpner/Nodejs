const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><form action="/home" method="POST"><input type="text" name="message"><button type="submit">Send Home</button></form></body>');
    res.write('<body><form action="/about" method="POST"><input type="text" name="message"><button type="submit">Send About</button></form></body>');
    res.write('<body><form action="/node" method="POST"><input type="text" name="message"><button type="submit">Send Node</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/home' && method === 'POST') {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1> Welcome Home!</h1></body>');
  res.write('</html>');
  res.end();
  }
  if(url === '/about' && method === 'POST') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1> Welcome to About Us page!</h1></body>');
    res.write('</html>');
    res.end();
    }  
    if (url === '/node' && method === 'POST') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title><head>');
        res.write('<body><h1>Welcome to my Node Js project</h1></body>');
        res.write('</html>');
        res.end();
        }    
});

server.listen(3000);
