import {Server} from 'socket.io'

function configureSocket(server) {
    
    const io = new Server(server, {
        cors: {
            origin: " * "
          }
    })
  
    io.on('connection', (socket) => {
      console.log('Nuevo cliente conectado');
  
      socket.on('mensaje', (data) => {
        console.log('Mensaje recibido:', data);
      });
  
      socket.on('disconnect', () => {
        console.log('Cliente desconectado');
      });
    });
  }
  export {configureSocket} //Exportamos la configuracion de socket.io
