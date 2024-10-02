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

  io.on('connection', async (socket) => {

    socket.on('chat message', async (msg) => {
      let result
      const username = socket.handshake.auth.username ?? 'anonymous';
      try {
          const sql = 'INSERT INTO messages (message,user) VALUES (?,?)'; //Incluimos dos marcadores de posicion para insertar tanto el mensaje como el usuario
          result = await conection.query(sql, [msg,username]); //Persistencia de datos
      } catch (error) {
          console.log('error'+ error);
          return;
      }
      io.emit('chat message', msg, result ,username); // Emitimos el mensaje desde el servidor , 
                                                      // es decir es como un return donde devolvemos valores al cliente (Index.html)
  });

  if(!socket.recovered) { //Ejecuto esta logica solo si el socket no fue recuperado

      const serverOffset = parseInt(socket.handshake.auth.serverOffset, 10) || 0; //En la consulta sql no se puede pasar objetos entonces convertimos a numero el offset

      const sql = 'SELECT id, message, user FROM messages WHERE id > ?'; //Separamos argumentos ya que la query espera un array separado y no como parte de un objeto 
      const args = [serverOffset ?? 0]; 
    
      try {
          const [results] = await conection.query(sql, args); // Pasar `sql` y `args` como parámetros separados
          results.forEach(element => {
              socket.emit('chat message', element.message, element.id,element.user);
          });

      } catch (error) {
          console.error('Error en la consulta SQL:', error);
      }
    }

  });
}
    
  
export {configureSocket} 
