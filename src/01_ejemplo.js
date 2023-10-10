import React from 'react'

const InputControlado = () => {
    const valorOriginal = React.useRef('0')
    const [valorActual, setValorActual] = React.useState('0')

    const handleChange = (event) => {
        setValorActual(event.target.value)
    }
    const handleBLur = () => {
        valorOriginal.current = valorActual
    }
  return (
    <div>
        <p>Valor Original: {valorOriginal.current}</p>
        <p>Valor Actual: {valorActual}</p>
        <input
         type = "text"
         value = {valorActual}
         onChange = {handleChange}
         onBlur = {handleBLur}
        
        />
    </div>
  )
}
export default InputControlado