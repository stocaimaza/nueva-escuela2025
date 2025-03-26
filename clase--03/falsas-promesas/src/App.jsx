import React from 'react'
import './App.css';
import Contador from './componentes/Contador/Contador';
import JsonPlaceHolder from './componentes/JsonPlaceHolder/JsonPlaceHolder';

const App = () => {
  return (
    <div>
      <h1> Hola Mundo </h1>
      <Contador />
      <JsonPlaceHolder/>
    </div>
  )
}

export default App