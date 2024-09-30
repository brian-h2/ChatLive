import { useEffect, useState } from 'react'
import './App.css'
import {io} from 'socket.io-client'

const socket = io('http://localhost:1234') //Nos permitira enviar eventos 

function App() {

  const [isConecter,setConecter] = useState(false)

  useEffect(() => {
    socket.on('connect', () => setConecter(true))
  },{})


  return (
    <>
      <h1 className="text-3xl font-bold underline">
        <h2> {isConecter ? 'Hola' : 'Chau'}</h2>
      </h1>
    </>
  )
}

export default App
