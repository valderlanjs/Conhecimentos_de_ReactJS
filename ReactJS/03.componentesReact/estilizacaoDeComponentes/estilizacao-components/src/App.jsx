import StatusText from "./components/StatusText"
import { Subtitle } from "./components/Subtitle"
import Title from "./components/Title"
import styles from "./App.module.css"


export default function App() {
  return ( //// aqui ele está acessando a classe do arquivo App.module.css, utilizando os dados dinamicos do react
    <div className={styles.app}> 
      <Title />
      <Subtitle />
      <StatusText />
    </div>
  )
}

