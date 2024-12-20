import HookUseReducer from "../components/HookUseReducer"
import HookUseState from "../components/HookUseState"
import HookUseEffect from "../components/HookUseEffect"

import { useContext } from "react"
import HookUseContext, { SomeContext } from "../components/HookUseContext"
import HookUseRef from "../components/HookUseRef"
import HookUseCallback from "../components/HookUseCallback"
import HookUseMemo from "../components/HookUseMemo"
import UseHookLayoutEffect from "../components/UseHookLayoutEffect"
import HookUseImperativeHandle from "../components/HookUseImperativeHandle"
import HookCustom from "../components/HookCustom"

const Home = () => {
  const {contextValue} = useContext(SomeContext)

  return (
    <div>
      <h1>Home</h1>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <h2>UseContext</h2>
      <p>Valor do contexto: {contextValue}</p>
      <hr />
      <HookUseRef />
      <HookUseCallback />
      <HookUseMemo />
      <UseHookLayoutEffect />
      <HookUseImperativeHandle />
      <HookCustom />
    </div>
  )
}

export default Home