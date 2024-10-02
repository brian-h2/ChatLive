import {Server} from 'socket.io'

async function configureSocket(server, conectiondb) {
  const io = new Server(server, {
      cors: {
          origin: " * "
        }
  })
  

  await conectiondb.query(
    `
    CREATE TABLE IF NOT EXISTS messages (
      id int auto_increment primary key,
      message text not null,
      user text not null,
      hour time  
    
    )
    `
  )

  io.on('connection', (socket) => {
    console.log('a user connected');

    // Escuchar la desconexión dentro del mismo socket
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });

}

    
  
export {configureSocket} 
