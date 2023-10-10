import React from 'react'

const primerEvento = () => {
    const nombre = (x) => {
        alert( `Mi nombre es: ${x}`);
        console.log(`Mi nombre es: ${x}`)
    }
  return (
    <button onClick={()=>nombre("Julian")}>mi primer evento</button>
  );
}

export default primerEvento