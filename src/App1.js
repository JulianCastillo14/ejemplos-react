import MiComponente from './MiComponente.jsx'
import React from 'react'

const App1 = () => {
  return (
    <div>
        <MiComponente rey={{nombre:"Atanaguildo", reses:10, ciudad:"Bogotá"}}/>
        <MiComponente rey={{nombre:"Ervigido", reses:12, ciudad:"Bucaramanga"}}/>
    </div>
  )
}

export default App1

/*
              Ejercicio
1. Construir un arreglo de frutas en el cliente 
2. Enviar el arreglo a un componente denominado Micomponente2           
3. El componente2 recibe el arreglo e impirme una lista de frutas

*/