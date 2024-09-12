// 1 - strict
"use strict";

// opa = "teste"

// 2 - console.log

// 3 - debugger
let c = 1
let d = 2

if (c == 1) {
    c = d + 2
}

// debugger;

for (let i = 0; i < d; i++) {
    c = c + 2
}

console.log("executou o loop")

// debugger

if (c > 5) {
    c = 25
}

// 4 - tratamento de dados
function checkNumber(n) {
    const result = Number(n)

    if (Number.isNaN(result)) {
        console.log("Valor incorreto!")
        return
    }

    console.log("Valor correto!")
    return result
}

checkNumber(5)
checkNumber("10")
checkNumber({})
checkNumber("teste")

// 5 - exceptions
// let x = 10

// if (x != 11) {
//     throw new Error("O valor de x não pode ser diferente de 11!")
// }

// 6 - try and catch
try {
    const soma = x + y
} catch (error) {
    console.log(`Erro no programa: ${error}`)
}

// 7 - finally

try {
    const value = checkNumber("1")

    if (!value) {
        throw new Error("Valores inválidos")
    }
} catch (error) {
    console.log(`Opa, aconteceu um problema ${error}`)
} finally {
    console.log("O código foi executado")
}

// 8 - assertions
function checkArray(arr) {

    if (arr.length === 0) {
        throw new Error("O array precisa ter elementos")
    } else {
        console.log(`O array tem ${arr.length} elementos`)
    }
}
// checkArray([])
checkArray([1, 2, 3, 4])