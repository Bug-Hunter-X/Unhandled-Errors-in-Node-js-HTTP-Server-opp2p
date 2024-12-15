const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request
  // ... some code here ...
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//This is a simple Node.js HTTP server. There is no obvious error, but it might cause unexpected behavior if not handled properly.  Improper error handling is a common but sometimes hard to detect bug in Node.js