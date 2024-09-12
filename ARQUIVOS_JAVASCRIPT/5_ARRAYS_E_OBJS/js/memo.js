// Destructuring em objetos
const userDetails = {
    Nome1: "Jose",
    Nome2: "Oliveira",
    Idade: "57"
}

const { Nome1, Nome2, Idade } = userDetails
console.log(Nome1, Nome2, Idade)

// Destructuring em arrays

const myList = ["Chá", "Tapioca", "Ovo", "Banana"]

const [Item1, Item2, Item3, Item4] = myList

console.log(item1, Item2, Item3, Item4)

// OOP
const animal2 = {
    nome: "Dogui",
    latir: function () {
        console.log("Au au au au")
    }
}
animal2.latir()

const pessoa2 = {
    Nome: "Jose",
    Idade: "57",
    getIdade: function () {
        return this.idade
    }
}
console.log(pessoa2.Nome, pessoa2.getIdade)