import Container from "./components/Container"
import Header from "./components/Header"
import UserContext from "./contexts/UserContext"


export default function App() {

  const user = {
    name:"joão",
    email: 'joao@gmail.com'
  }

  return (
    <>
      <UserContext.Provider value={user}>
        <Header />
        <h1>UseContext</h1>
        <Container>
        </Container>
      </UserContext.Provider>
      <div>
        {/* não há acesso ao contexto */}
      </div>
    </>
  )
}