import MiComponente2 from './MiComponente2'
import React from 'react'

const App2 = () => {
  
  const fruta = [
    {
        nombre: 'Manzana',
        precio: 3000
    },
    {
        nombre: 'Pera',
        precio: 2000

    },
    {
        nombre: 'Mango',
        precio: 2800

    },
    {
        nombre: 'Durazno',
        precio: 1800

    },
    {
        nombre: 'Banano',
        precio: 600

    }
  ]
  return (
    <div>
        <h1>Frutas</h1>
        <MiComponente2 fruta={fruta[0]}/>
        <MiComponente2 fruta={fruta[1]}/>
        <MiComponente2 fruta={fruta[2]}/>
        <MiComponente2 fruta={fruta[3]}/>
        <MiComponente2 fruta={fruta[4]}/>
    </div>
  )
}

export default App2