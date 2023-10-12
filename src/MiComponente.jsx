import React from 'react'

const MiComponente = ({rey}) => {
  return (
    <div>
        <h4>Hola {rey.nombre} come {rey.reses} vacas al días en la cidudad de {rey.ciudad}</h4>
    </div>
  )
}

export default MiComponente