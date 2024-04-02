import React, { useRef, useState } from 'react'
import RefExample from './REfExample'

export default function App() {
  let variable = 0

  const [state, setState] = useState(0)
  const ref = useRef(0)
  const showValue = () => {
    alert(`
      Variável: ${variable}
      Ref: ${ref.current}
      State: ${state}
    `)
  }


  return (
    <div>
      <h2>Exemplo de useRef com DOM</h2>
      <RefExample />
      <hr />
      <h2>Conhecendo o useRef</h2>
      <hr />
      <p>Variável: {variable}</p>
      <p>Ref: {ref.current}</p>
      <p>State: {state}</p>
      <button 
        onClick={() => variable++}
      >
        Aumentar Variável
      </button>
      <button 
        onClick={() => ref.current++}
      >
         Aumentar Ref
      </button>
      <button 
        onClick={() => setState(state => state + 1)}
      >
        Aumentar State
      </button>
      <hr />
      <button onClick={showValue}>Exibir Valores</button>
    </div>
  )
}