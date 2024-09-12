// 1 - Number
console.log(typeof 2);
// 2 - Operadores
console.log(5 + 4 * 2);
// 3 - Special numbers
console.log(typeof Infinity);

// 4 - Strings 
console.log("Um texto");
console.log('Mais um texto');

// 5 - caracteres especiais
console.log("Texto em \nduas linhas")
console.log("Espaçamento de \ttab")

// 6 - concatenação
console.log("Oi, " + "tudo" + " bem?");
console.log('Testando ' + 'com ' + 'crase')

// 7 - template strings
console.log(`A soma de 2 + 2 é ${2 + 2}`)

console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`)

// 8 - boolean 
console.log(true)
console.log(5 > 20)
console.log(35 > 20)

// 9 - comparações
console.log(5 <= 5)
console.log(10 == 10)
console.log(10 == 9)

// 10 - idêntico
console.log(9 == "9");
console.log(9 === "9")

// 11 - operadores lógicos
console.log(true && true)
console.log(5 > 2 && 2 < 10)

// 12 - empty values
console.log(typeof null, typeof undefined)

// 13 - mudança de tipos
console.log(5 * null)
console.log("teste" * "opa")
console.log("10" + 1)
console.log("10" - 1)