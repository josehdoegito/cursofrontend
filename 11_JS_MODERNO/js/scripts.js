// // 1 var, let e const
// var x = 10;
// var y = 15;

// if (y > 10) {
//   var x = 5;
//   console.log(x);
// }

// console.log(x);

// let a = 10;
// let b = 15;

// if (b > 10) {
//   let a = 5;
//   console.log(a);
// }

// console.log(a);

// function logName() {
//   const name = "Pedro";
//   console.log(name);
// }

// const name = "Matheus";

// logName();

// // 2 arrow function
// const sum = function (a, b) {
//   return a + b;
// };

// const arrowSum = (a, b) => a + b;

// console.log(sum(5, 5));
// console.log(arrowSum(5, 5));

// const greeting = (name) => {
//   if (name) {
//     return "Hello " + name + "!";
//   } else {
//     return "Hello!";
//   }
// };

// console.log(greeting());
// console.log(greeting("Matheus"));

// const user = {
//   name: "Theo",
//   sayUserName() {
//     setTimeout(function () {
//       console.log(this);
//       console.log("Username: " + this.name);
//     }, 1000);
//   },
//   sayUserNameArrow() {
//     setTimeout(() => {
//       console.log(this);
//       console.log("Username: " + this.name);
//     }, 1200);
//   },
// };

// // user.sayUserName()
// // user.sayUserNameArrow()

// // 3 filter
// const arr = [1, 2, 3, 4, 5];

// const highNumbers = arr.filter((n) => {
//   if (n >= 3) {
//     return n;
//   }
// });

// console.log(highNumbers);

// const users = [
//   { name: "Matheus", available: true },
//   { name: "Pedro", available: false },
//   { name: "Marcos", available: true },
//   { name: "Josias", available: false },
// ];

// const availableUsers = users.filter((user) => user.available);

// console.log(availableUsers);

// // 4 map
// const products = [
//   { name: "Camisa", price: 10.99, category: "Roupa" },
//   { name: "Chaleira elétrica", price: 150, category: "Eletro" },
//   { name: "Fogão", price: 499, category: "Eletro" },
//   { name: "Calça jeans", price: 49.99, category: "Roupa" },
// ];

// products.map((product) => {
//   if (product.category === "Roupa") {
//     product.onSale = true;
//   }
// });

// console.log(products);

// // 5 template literals
// const userName = "Matheus";
// const age = 30;

// console.log(`O nome do usuário é ${userName} e ele tem ${age} anos!`);

// // 6 destructuring
// const fruits = ["Maçã", "Mamão", "Laranja"];

// const [f1, f2, f3] = fruits;

// console.log(f1);

// const productDetails = {
//   name: "Mouse",
//   price: 39.99,
//   category: "Periféricos",
//   color: "Cinza",
// };

// const {
//   name: productName,
//   price: productPrice,
//   category: productCategory,
//   color: productColor,
// } = productDetails;

// console.log(
//   `O nome do produto é ${productName}, custa R$${productPrice} e é da cor ${productColor}.`
// );

// const productDetails2 = {
//   name: "Keyboard",
//   price: "30.00",
//   category: "Periféricos",
//   color: "Branco"
// }

// const {
//   name: productName2,
//   price: productPrice2,
//   category: productCategory2,
//   color: productColor2,
// } = productDetails2

// console.log(
//   `O nome do produto é ${productName2}, cust R$${productPrice2} e é da cor ${productColor2}`
// )


// // 7 spread operator
// const a1 = [1, 2, 3];
// const a2 = [4, 5, 6];

// const a3 = [...a1, ...a2];

// console.log(a3);

// const a4 = [0, ...a1, 4];

// console.log(a4);

// const carName = { name: "Gol" };
// const carBrand = { brand: "VW" };
// const otherInfos = { km: 100000, price: 49000 };

// const car = { ...carName, ...carBrand, ...otherInfos };

// console.log(car);

// 8 classes
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100); /* acessando a propriedade do próprio objeto com this */
  }
}

const shirt = new Product("Camisa gola V", 20);

console.log(shirt.productWithDiscount(10));

// class Pc {
//   constructor(marca, processador) {
//     this.marca = marca
//     this.processador = processador
//   }

//   marcaDeQualidade(marca, processador) {
//       if(marca === "intel") {
//        return console.log(`A marca ${marca} é de boa qualidade do processador ${processador}`)
//       } else {
//         console.log("Marca ruim")
//       }
//   }
// }

// const newCpu = new Pc()
// console.log(newCpu.marcaDeQualidade("intel", "i7"))

// 9 herança

class productWithAttributes extends Product {
  constructor(name, price, colors) {
    super(name, price)
    this.colors = colors
  }

  showColors() {
    console.log("As cores são: ")
    this.colors.forEach((color) => {
      console.log(color)
    })
  }
}

const hat = new productWithAttributes("Chapéu", "29.99", ["preto", "amarelo", "verde"])

console.log(hat)
hat.showColors()