import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from './routes/Home.jsx'

//2 - criando provider
import { CounterContextProvider } from './context/CounterContext.jsx'

// 5 - contexto mais complexo
import { TitleColorContextProvider } from './context/TitleColorContext.jsx'

import Contact from "./routes/Contact";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TitleColorContextProvider>
      <CounterContextProvider>
        <RouterProvider router={router} />
      </CounterContextProvider>
    </TitleColorContextProvider>
  </StrictMode>
)
