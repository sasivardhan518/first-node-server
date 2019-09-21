const http = require('http');

const hostName = process.env.hostName;
const port = process.env.port;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('!hello Shashi :)');
});

server.listen(port, hostName, () => {
    console.log(`Server listening at ${hostName + ':' + port}`);
});