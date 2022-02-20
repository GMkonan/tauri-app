import React, { useEffect, useState } from 'react'
import { invoke } from '@tauri-apps/api/tauri'
import { appWindow } from "@tauri-apps/api/window";

import './App.css'

function App() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    invoke('my_return_command').then((message:any) => setMessage(message))
    invoke("my_custom_command")
  }, [])

  return (
    <div className="App">
      <h1>{message}</h1>
      <h2>Message in plain HTML</h2>
      <button onClick={() => appWindow.close()}>Close Button</button>
    </div>
  )
}

export default App
