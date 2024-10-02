import './App.css'
import { useEffect, useState } from 'react'
import {io} from 'socket.io-client'

 //Nos permitira enviar eventos 

function App() {

  const [socket, setSocket] = useState(null)
  const [isConecter,setConecter] = useState(false)

  useEffect(() => {
    const Newsocket = io('http://localhost:1234')
    setSocket(Newsocket)

    Newsocket.on('connect', () => {
      setConecter(true);
      console.log('Connect');
    });

    Newsocket.on('disconnect', () => {
      setConecter(false);
      console.log('Disconnect');
    });
  },[])


  return (
    <>
      <section id="chat">
        <ul id="messages"></ul>
        <form id="form">
          <input id="input" autocomplete="off" placeholder="Text"/><button>Enviar</button>
        </form>
      </section>
    </>
  )
}

export default App
