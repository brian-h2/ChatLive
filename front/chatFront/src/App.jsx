import './App.css'
import { useEffect, useState } from 'react'
import {io} from 'socket.io-client'

 //Nos permitira enviar eventos 

function App() {
  const socket = io('http://localhost:1234')

  const [isConecter,setConecter] = useState(false)

  useEffect(() => {
      socket.on('connect', () => setConecter(true))
  },{})


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
