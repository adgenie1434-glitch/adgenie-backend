const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('AdGenie API is running');
});
server.listen(process.env.PORT || 3000);
console.log('Server started');
