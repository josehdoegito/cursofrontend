import viteLogo from '/vite.svg'
import './App.css'

// 2 - imagem em assets
import night from './assets/night.jpg'

// 3 - useState
import Data from './components/Data'

// 4 - renderização de lista
import ListRender from './components/ListRender'

//7 - Render condicional
import ConditionalRender from './components/ConditionalRender'

// 8 - props
import ShowUserName from './components/ShowUserName'

// 9 - desestruturando props 
import CarDetails from './components/CarDetails'

// 11 - renderização de listas com componente
const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "KIA", color: "Branco", km: 200000 },
  { id: 3, brand: "Renault", color: "Azul", km: 32000 },
]

// 12 - fragments
import Fragment from './components/Fragment'

// 13 - children
import Container from './components/Container'

// 14 - função em prop
import ExecuteFunction from './components/ExecuteFunction'


// 15 - state lift
import Message from './components/Message'
import { useState } from 'react'
import ChangeMessage from './components/ChangeMessage'

function App() {

// 14 - função em prop
function showMessage() {
  console.log("Evento do componente pai")

}

// 15 - state lift
const [message, setMessage] = useState("")

const handleMessage = (msg) => {
  setMessage(msg)
}

  return (
      <div className="App" style={{paddingBottom: "500px"}}>
        <h1>Avançando em React</h1>
        {/* 1 - imagem em public */}
        <img src="/img.jpg" alt="Alguma coisa" />
        {/* 2 - imagem em assets */}
        <img src={night} alt="Outra imagem" />
        {/* 3 - useState */}
        <Data />
        {/* 4 - render de lista */}
        <ListRender />
        {/* 7 - render condicional */}
        <ConditionalRender />
        {/* 8 - props */}
        <ShowUserName name="Matheus" />
        {/* 9 - desestruturando props */}
        <CarDetails brand="VW" km={900} color="Vermelho" />
         {/* 10 - reaproveitamento de componentes */}
         <CarDetails brand="Fiat" km={9120} color="Azul" />
         <CarDetails brand="Renault" km={12300} color="Branco" />
         {/* 11 - renderização de lista com componente */}
         <hr />
         <h2>Renderização com lista de componente</h2>
         
         {cars.map((car) => (
            <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km}/>
         ))}
         {/* 12 - fragment */}
         < Fragment />
         {/* 13 - children */}
         <Container>
          <p>Alguma coisa</p>
         </Container>
         <Container>
          <div>
            <h2>Teste</h2>
            <p>Meu container</p>
          </div>
         </Container>
         {/* 14 - função em prop */}
         <ExecuteFunction myFunction={showMessage} />
         {/* 15 - state lift */}
         <Message msg={message} />
         <ChangeMessage handleMessage={handleMessage} />
      </div>
    
  )
}

export default App
