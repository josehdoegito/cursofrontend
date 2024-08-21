import React from 'react'

const Events = () => {
    const handleClick = (e) => {
        console.log(e)
        console.log("Executou")
    }

    // 8 - função de renderização
    const renderSomething = (x) => {
        if(x) {
            return <h1>Renderizando isso</h1>
        } else {
            return <h1>Renderizando aquilo</h1>
        }
    }

    return 10 > 2 && <p>Carregando...</p>

    return ( 
        <div>
            <div>
                <button onClick={() => console.log("Testando um evento")}>Clique aqui</button>
            </div>
            {/* 7 - evento com função */}
            <div>
                <button onClick={handleClick}>Clique aqui - com função</button>
            </div>
            {/* 8 - função com render */}
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
  )
}

export default Events