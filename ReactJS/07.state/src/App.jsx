import Card from "./components/Card";
import posterImg from "./assets/star-wars.jpg"
import posterImg2 from "./assets/rotj-poster.jpg"
import posterImg3 from "./assets/esb-poster.jpg"

function App() {
  return (
    <>
      <div className="app">
          <Card title="Pôster: Star Wars (1977)" posterImg={posterImg}/>
          <Card title="Pôster: Empire Strike Back (1980)" posterImg={posterImg2}/>
          <Card title="Pôster: Return of the Jedi (1983) Wars" posterImg={posterImg3}/>
      </div>
    </>
  )
}

export default App;