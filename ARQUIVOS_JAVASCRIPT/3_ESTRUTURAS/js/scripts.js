// 1 - variáveis
// let nome = "José"
// console.log(nome)

// nome = "Samara"

// console.log(nome)

// const idade = 20

// console.log(idade)

// console.log(typeof nome)
// console.log(typeof idade)

// // 2 - mais sobre variáveis

// let teste = "inválido"

// let a = 10,
//     b = 20,
//     c = 30
// console.log(a, b, c)

// const nomecompleto = "José Antônio de Oliveira"
// const nomeCompleto = "Marinéia D Oliveira Vieira"
// console.log(nomeCompleto)
// console.log(nomecompleto)

// let _teste = "ok"
// let $teste = "ok"
// console.log($teste, _teste)

// 3 - prompt
// const age = prompt("Digite a sua idade:")

// console.log(`Você tem ` + age + ` anos`)

// 4 - alert
// alert("Olá")

// const z = 10
// alert(`O Número é ${z}`)

// 5 - Math
// console.log(Math.max(1, 23, 190, -10))
// console.log(Math.floor(5.14))
// console.log(Math.ceil(5.14))

// // 6 - console
// console.log("teste!")
// console.error("erro")
// console.warn("Aviso!")

// 7 - if

// const m = prompt("Digite a sua idade:")

// if (m > 50) {
//     alert("idade é maior que 50")
// } else {
//     alert("idade é menor que 50")
// }

// const user = "João"

// if (user === "João") {
//     console.log("Olá, João")
// }

// // 8 - else
// const loggedIn = false

// if (loggedIn) {
//     console.log("Está autenticado")
// } else {
//     console.log("Não está autenticado")
// }

// const q = 10
// const w = 25

// if (q > 5 && w > 20) {
//     console.log("Números mais altos")
// } else {
//     console.log("Números não são mais altos")
// }

// // 9 - else if
// if (1 > 2) {
//     console.log("Teste")
// } else if (2 > 3) {
//     console.log("Teste 2")
// } else if (5 > 1) {
//     console.log("Agora sim!")
// }

// const userName = "Matheus"
// const userAge = 31

// if (userName === "José") {
//     console.log("Bem vindo, José!")
// } else if (userName === "Matheus" && userAge === 31) {
//     console.log("Olá, Matheus, você tem 31 anos!")
// } else {
//     console.log("Nenhuma condição aceita!")
// }

// 10 - while

// let p = 0

// while (p <= 5) {
//     console.log(`Repetindo ${p}`)
//     p = p + 1
// }

// loop infinito
// let x = 10

// while (x > 5) {
//     console.log(`Imprimindo ${x}`)
// }


// 11 - do while
// let o = 10

// do {
//     console.log(`O valor de o: ${o}`)
//     o--
// } while (o > 1)


// 12 - for
for (let t = 0; t < 10; t++) {
    console.log(`Repetindo algo`)
}

let r = 10

for (r; r > 0; r = r - 1) {
    if (r != 10) {
        console.log(`O r está diminuindo para ${r}`)
    }
}

// 13 - identação
for (let u = 0; u < 10; u++) {
    if (u * 2 > 10) {
        console.log(`Maior que 10! ${u}`)
    } else {
        if (u / 2 === 0) {
            console.log("deu 0")
        }
    }
}

// 14 - break
for (let g = 20; g > 10; g--) {
    console.log(`O valor de g é: ${g}`)

    if (g === 12) {
        console.log("O g é 12!")
        break
    }
}

// 15 - continue
for (let s = 0; s < 10; s = s + 1) {
    // operador de resto  %
    if (s % 2 == 0) {
        console.log("Número par!")
        continue
    }
    console.log(s)
}

// 16 - switch
const job = prompt("Qual a sua profissão? ")

switch (job) {
    case "Programador":
        console.log("Você é um programador!")
        break
    case "Advogado":
        console.log("Você é um advogado!")
        break
    case "Engenheiro":
        console.log("Você é um engenheiro!")
        document.write(`<h1>Engenheiro</h1>`)
        break
    default:
        console.log("Profissão não encontrada")
}