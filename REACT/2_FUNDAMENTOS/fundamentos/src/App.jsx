import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 2 - importando componente
import FirstComponent from './components/FirstComponent'

// 4 - template expression
import TemplateExpression from './components/TemplateExpression'

//5 - Hierarquia de componentes
import MyComponent from './components/MyComponent'

// 6 - eventos
import Events from './components/Events'

function App() {
  // 3 - comentários 
  return (
  <div className="App">
    {/* 3 - comentário JSX */}
      <h1>Fundamentos do React</h1>
         <FirstComponent/>
         <TemplateExpression/>
         <MyComponent/>
         <Events/>

  </div>
  )
}

export default App