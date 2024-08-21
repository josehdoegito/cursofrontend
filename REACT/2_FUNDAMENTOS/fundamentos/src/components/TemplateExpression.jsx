// 4 - template expression

const TemplateExpression = () => {
    const name = "José"

    const data = {
        age:48,
        job: "Programador"
    }

  return (
    <div><p><h2>A soma é {2 + 2}</h2></p>
    <h3>Bemvindo {name}!</h3>
    <h4>Sua idade é {data.age} anos e sua profissão é {data.job}</h4>
    </div>
  )
}

export default TemplateExpression