import React from 'react'

const MiComponente2 = ({fruta}) => {
  return (
    <div>
        <ul>
            <li>
                {fruta.nombre} cuesta {fruta.precio} pesos
            </li>
        </ul>
    </div>
  )
}

export default MiComponente2