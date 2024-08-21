import React from 'react'

const ConditionalRender = () => {
    const x = false
    const name = "João"

  return <div>
    {/* 7 - render conditional */}
    <h3>Isso será exibido?</h3>
    {x && <p>Se x for true, sim!</p>}
    {/* 8 - else */}
    <h3>Render ternário</h3>
    {name === "João" ? (
        <div>
            <p>Olá, João!</p>
        </div>
    ) : (
        <div>
            <p>Nome não encontrado</p>
        </div>
    )}
  </div>
}

export default ConditionalRender