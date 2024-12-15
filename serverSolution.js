const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request
  // ... some code here ...
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
}).on('error', err => {
  console.error('Server error:', err);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
}).on('error', err => {
  console.error('Failed to start server:', err);
});

//This improved version uses `.on('error', ...)` to handle potential errors during server creation and operation. This provides more robust error handling and prevents unexpected crashes.