// 1 - métodos
const animal = {
    nome: "Bob",
    latir: function () {
        console.log("Au au")
    }
}

console.log(animal.nome)
animal.latir() // executando um método que está dentro do objeto

// 2 - aprofundando em métodos
// const pessoa = {

//     nome: "José",
//     getNome: function () {
//         return this.nome
//     },

//     setNome: function (novoNome) {
//         this.nome = novoNome
//     }
// }
// console.log(pessoa.nome)
// console.log(pessoa.getNome())
// pessoa.setNome("Samara")
// console.log(pessoa.getNome())

// const pessoa2 = {
//     Nome: "Jose",
//     Idade: "57",

//     getNome2: function () {
//         return this.Nome
//     },

//     setNome2: function (novoNome2) {
//         this.Nome = novoNome2
//     }
// }
// console.log(pessoa2.Nome)
// pessoa2.setNome2("Mari")
// console.log(pessoa2.getNome2())

// const pessoa3 = {
//     Nome: "Jamily",
//     Idade: "23",

//     setnome2: function (novonomex) {
//         this.Nome = novonomex
//         return this.Nome
//     }

// }

// console.log(pessoa3.setnome2("Marineia"))

// // 3 - prototype
// const text = "asd"

// console.log(Object.getPrototypeOf(text))
// const bool = true
// console.log(Object.getPrototypeOf(bool))
// const arr = []
// console.log(arr.length)
// console.log(Object.getPrototypeOf(arr))

// // 4 - mais sobre prototype
// const myObject = {
//     a: "b",
// }

// console.log(Object.getPrototypeOf(myObject))
// console.log(Object.getPrototypeOf(myObject) === Object.prototype)

// const mySecondObject = Object.create(myObject)

// console.log(mySecondObject.a)

// console.log(Object.getPrototypeOf(mySecondObject) === myObject)

// 5 - classes básicas
// const cachorro = {
//     raca: null,
//     patas: 4
// }

// const pastorAlemao = Object.create(cachorro)

// pastorAlemao.raca = "Pastor Alemao"

// console.log(pastorAlemao)

// const ShinTzu = Object.create(cachorro)

// ShinTzu.raca = "Shyn Tzu"

// console.log(ShinTzu)

// const gato = {
//     raca: null
// }

// const siames = Object.create(gato)

// siames.raca = "Siamês"

// console.log(siames)

// // 6 - função como classe - função construtora
// function criarCachorro(nome, raca) {

//     const cachorro = Object.create({})

//     cachorro.nome = nome
//     cachorro.raca = raca

//     return cachorro
// }

// const bob = criarCachorro("Bob", "Vira lata")
// console.log(bob)

// const jack = criarCachorro("Jack", "Lhasa")
// console.log(jack)

// // 7 - funções como classes
// function Cachorro(nome, raca) {
//     this.nome = nome
//     this.raca = raca
// }

// const husky = new Cachorro("Ozzy", "Husky")
// console.log(husky)

// // 8 - métodos na função construtora
// Cachorro.prototype.uivar = function () {
//     console.log("Auuuuuu!")
// }

// console.log(Cachorro.prototype)
// husky.uivar()

// // 9 - classes es6
// class CachorroClasse {
//     constructor(nome, raca) {
//         this.nome = nome
//         this.raca = raca
//     }
// }

// const jeff = new CachorroClasse("Jeff", "Labrador")

// console.log(jeff)
// console.log(Object.getPrototypeOf(jeff))

// // 10 - mais sobre classes
// class Caminhao {
//     constructor(eixos, cor) {
//         this.eixos = eixos;
//         this.cor = cor;
//     }

//     descreverCaminhao() {
//         console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
//     }
// }

// const scania = new Caminhao(6, "Vermelha")

// console.log(scania)
// scania.descreverCaminhao()

// Caminhao.prototype.motor = 4.0

// const c3 = new Caminhao(6, "Azul")
// console.log(c3.motor)

// // 11 - overrride
// class Humano {
//     constructor(nome, idade) {
//         this.nome = nome
//         this.idade = idade
//     }
// }

// const matheus = new Humano("Matheus", 31)

// console.log(matheus)

// Humano.prototype.idade = "Não definida"
// // se o humano não tem uma instãncia ainda, a idade não é definida

// console.log(matheus.idade)
// // mas isso não vai alterar os objetos que instanciaram essa classe

// console.log(Humano.prototype.idade)
// // apenas o prototype da classe que origina os objetos

// // 12 - symbols

class Aviao {
    constructor(marca, turbinas) {
        this.marca = marca
        this.turbinas = turbinas
    }
}

const asas = Symbol()
const pilotos = Symbol()

Aviao.prototype[asas] = 2
Aviao.prototype[pilotos] = 3

const boeing = new Aviao("Boeing", 10)

console.log(boeing)

console.log(boeing[asas])
console.log(boeing[pilotos])

// 13 - getter e setter

class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo
        this.descricao = descricao
        this.tags = tags
    }

    get exibirTitulo() { // getter definido como método
        return `Você está lendo: ${this.titulo}`
    }

    set adicionarTags(tags) {
        const tagsArray = tags.split(",")
        this.tags = tagsArray
    }
}

const myPost = new Post("Algum post", "É um post sobre programação")

console.log(myPost)

console.log(myPost.exibirTitulo) // o getter é usado como propriedade

myPost.adicionarTags = "programação, javascript, js, PHP, Python"

console.log(myPost)

// 14 - Herança

class Mamifero {
    constructor(patas) {
        this.patas = patas
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome) {
        super(patas, patas)
        this.nome = nome
    }
}

const shark = new Lobo(4, "Shark")
console.log(shark)
console.log(shark.patas)

// 15 - instanceof
console.log(shark instanceof Lobo) // true
console.log(Lobo instanceof Mamifero) // false
console.log(new Lobo(4, "Teste") instanceof Mamifero) // true, verifico de objeto
// para classe, classe Lobo herdou de Mamifero; é uma instância dela