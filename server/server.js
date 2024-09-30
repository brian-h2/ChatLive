const http = require('http');

// Create an HTTP server

const server = http.createServer();

const port = process.env.PORT ?? 1234;

const io = require('socket.io') (server, {
    cors: { origin : '*'}
});


// Socket.IO event listeners

io.on('connection', (socket) => {
    
});

server.listen(port);