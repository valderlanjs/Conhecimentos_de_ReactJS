
import useCounter from './hooks/useCounter'
import './App.css'
//import { useState } from 'react'

function App() {
   const counter = useCounter()
   /*let someState

   if (counter.count > 10) { // Aqui quando for maior que , ele vai dá erro, por isso tem que está no top level do componente
    someState = useState("Maior do que 10")
   }
*/
  return (
    <>
      <h1>Vite + React {someState}</h1>
      <div className="card">
        <button onClick={counter.increment}>
          count is {counter.count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
