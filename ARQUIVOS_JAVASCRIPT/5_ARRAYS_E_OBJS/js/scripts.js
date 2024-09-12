// // 1 - Arrays 
// const lista = [1, 2, 3, 4, 5]

// console.log(lista)

// console.log(typeof lista)

// const itens = ["Matheus", true, 2, 4.12, []]
// console.log(itens)

// // 2 - mais sobre arrays
// const arr = ["a", "b", "c", "d"]
// console.log(arr[0])
// console.log(arr[2])

// // 3 - propriedades
// const numbers = [5, 3, 4]
// console.log(numbers.length)
// console.log(numbers["length"])

// const myName = "Matheus"

// console.log(myName.length)

// // 4 - métodos
// const otherNumbers = [1, 2, 3]

// const allNumbers = numbers.concat(otherNumbers)

// console.log(allNumbers)

// const text = "algum texto"

// console.log(text.toUpperCase())

// console.log(text.indexOf("g"))

// // 5 - objetos
// const person = {
//     name: "Matheus",
//     age: 31,
//     job: "Programador"
// }

// console.log(person)
// console.log(person.name)
// console.log(person.name.length)

// // 6 - criando e deletando propriedades
// const car = {
//     engine: 2.0,
//     brand: "VW",
//     model: "Tiguan",
//     km: 20000,
// }
// console.log(car)

// car.doors = 4

// console.log(car)

// delete car.km

// console.log(car)

// // 7 - mais sobre objetos
// const obj = {
//     a: "teste",
//     b: true
// }

// console.log(obj instanceof Object)

// const obj2 = {
//     c: []
// }

// Object.assign(obj2, obj)

// console.log(obj2)

// // 8 - conhecendo melhor os objetos
// console.log(Object.keys(obj))
// console.log(Object.keys(obj2))

// console.log(Object.keys(car))
// // conseguindo chaves e valores
// console.log(Object.entries(car))

// // 9 - mutação
// const a = {
//     name: "Matheus"
// }

// const b = a
// console.log(a)
// console.log(b)
// console.log(a === b)

// a.age = 31

// console.log(b)
// console.log(a)

// delete b.age

// console.log(a)
// console.log(b)

// 10 - loop em array
// const users = ["Matheus", "João", "Pedro", "Miguel"]

// for (let i = 0; i < users.length; i++) {
//     console.log(`Listando o usuário ${users[i]}`)
// }

// // 11 - push e pop
// const array = ["a", "b", "c"]

// array.push("d")

// console.log(array)

// array.pop()

// console.log(array)

// const itemRemovido = array.pop()

// console.log(itemRemovido)

// array.push("z", "x", "y")

// console.log(array)

// // 12 - shift e unshift
// const letters = ["a", "b", "c"]
// const letter = letters.shift()
// console.log(letter)
// console.log(letters)

// letters.unshift("p", "q", "r")
// letters.unshift("z")

// console.log(letters)

// // 13 - indexof e lastindexof
// const myElements = ["Morango", "Maçã", "Abacate", "Pera", "Abacate"]

// console.log(myElements.indexOf("Maçã"))
// console.log(myElements.indexOf("Abacate"))

// console.log(myElements[2])
// console.log(myElements[myElements.indexOf("Abacate")])

// console.log(myElements.lastIndexOf("Abacate"))

// console.log(myElements.indexOf("Mamão"))

// 14 - slice
// const testeSlice = ["a", "b", "c", "d", "e", "f"]

// const subArray = testeSlice.slice(2, 4)
// const subArray2 = testeSlice.slice(2, 4 + 1)

// console.log(testeSlice)
// console.log(subArray)

// console.log(testeSlice.slice(10, 20))

// // 15 - foreach
// const nums = [1, 2, 3, 4, 5]
// nums.forEach((numero) => {
//     console.log(`O número é ${numero}`)
// })

// const posts = [
//     { title: "Primeiro post", category: "PHP" },
//     { title: "Segundo post", category: "JavaScript" },
//     { title: "Terceiro post", category: "Python" }
// ]

// posts.forEach((post) => {
//     console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`)
// })

// // 16 - includes
// const brands = ["BMW", "VW", "Fiat"]

// console.log(brands.includes("Fiat"))
// console.log(brands.includes("KIA"))

// if (brands.includes("BMW")) {
//     console.log("Há carros da marca BMW")
// }

// // 17 - reverse
// const reverseTest = [1, 2, 3, 4, 5]
// reverseTest.reverse()
// console.log(reverseTest)

// 18 - Trim
// const trimTest = " Testando \n "
// console.log(trimTest)
// console.log(trimTest.trim())

// console.log(trimTest.length)
// console.log(trimTest.trim().length)

// // 19 - padstart
// const testePadStart = "1"

// const newNumber = testePadStart.padStart(7, 0)
// console.log(newNumber)

// const testePadEnd = newNumber.padEnd(10, 0)
// console.log(testePadEnd)

// // 20 - split
// const frase = "O rato roeu a roupa do rei de Roma"
// const arrayDaFrase = frase.split(" ")
// console.log(arrayDaFrase)

// // 21 - join
// const fraseDeNovo = arrayDaFrase.join(" ")
// console.log(fraseDeNovo)

// const itensParaComprar = ["Mouse", "Teclado", "Monitor"]

// const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`
// console.log(fraseDeCompra)

// // 22 - repeat
// const palavra = "Testando "

// console.log(palavra.repeat(5))

// // 23 - rest operator/parameter
// const somaInfinita = (...args) => {
//     let total = 0

//     for (let i = 0; i < args.length; i++) {
//         total += args[i]
//     }
//     return total
// }

// console.log(somaInfinita(1, 2, 3))
// console.log(somaInfinita(1, 20, 34, 3424, 128812, 12723, 12, 23, 54, 12))

// 24 - for of
const somaInfinita2 = (...args) => {

    let total = 0

    for (num of args) {
        total += num
    }

    return total
}

console.log(somaInfinita2(1, 2, 3, 4, 5))
console.log(somaInfinita2(5, 6, 1, 23, 5, 6, 3, 5))

// 25 - destructuring em objetos
const userDetails = {
    firstName: "Matheus",
    lastName: "Battisti",
    job: "Programador"
}

// no jeito tradicional faríamos assim
// const firstName = userDetails.firstName etc..

const { firstName, lastName, job } = userDetails // variável const criada referente
// às propriedades do objeto
console.log(firstName, lastName, job)

// renomear variáveis
const { firstName: primeiroNome } = userDetails // identifica a propriedade firstName
// dada pelo objeto e cria uma variável primeiroNome com o valor firstName

console.log(primeiroNome)

// 26 - destructuring com arrays
const myLista = ["Avião", "Submarino", "Carro"]

const [veiculoA, veiculoB, veiculoC] = myLista

console.log(veiculoA, veiculoB, veiculoC)

const myList = ["Chá", "Tapioca", "Ovo", "Banana"]

const [Item1, Item2, Item3, Item4] = myList

console.log(Item1, Item2, Item3, Item4)

// 27 - JSON
const myJson = '{"name": "Matheus", "age": 31, "skills": ["PHP", "JavaScript", "Pyhton"]}'
console.log(myJson)

// 28 - JSON para objeto e objeto para JSON
const myObject = JSON.parse(myJson)

console.log(myObject)
console.log(myObject.name)

// json inválido
const badJson = '{"name": Matheus, "age": 31}'

// const myBadObject = JSON.parse(badJson)

myObject.isOpenToWork = true;

console.log(myObject)

// convertendo de novo para json
const myNewJson = JSON.stringify(myObject)
console.log(myNewJson)
console.log(typeof myNewJson)