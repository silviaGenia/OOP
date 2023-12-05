//Todo en JavaScript es un Objeto.
//Objeto Literal => {}
const user = {
  name: "Ryan", //Propiedades o properties
  lastname: "Ray",
  age: 30,
  hobbies: ["read", "run"],
  address: {
    street: "some street",
    city: "london",
  },
};

//Propiedades: "const user" tienen pares de datos clave y valor.

//=>METODO o Method
// Los metodos son la acciones (function)
function showFullname() {
  return "Ryan Ray";
}
const user1 = {
  name: "Ryan", //Propiedades o properties
  lastname: "Ray",
  age: 30,
  showFullname: showFullname,
};
//Otra manera de incluir en un objeto literal un mètodo
const user11 = {
  name: "Ryan", //Propiedades o properties
  lastname: "Ray",
  age: 30,
  showFullname() {
    //mètodo
    return "Ryan Ray";
  },
};
//this => Dice quiero llamar a esta propiedad
const account = {
  number: "1321231321",
  amount: 100,
  deposit(quantity) {
    this.amout = this.amout + quantity;
  },
  withdraw(quantity) {
    this.amout = this.amout - quantity;
  },
};

//=> CONSTRUCTORES o Constructor
const user12 = {
  name: "Ryan", //Propiedades o properties
  lastname: "Ray",
  age: 30,
  showFullname() {
    //return this.name + "" + this.lastname;
    return `${this.name} ${this.lastname}`;
  },
};

//Utilizando contructores se mejora el objeto literal
//no son mas que function

function Person() {
  (this.name = ""),
    (this.lastname = ""),
    (this.age = 0),
    (this.showFullname = function () {
      return `${this.name}${this.lastname}`;
    });
}
//Se Llama
const user2 = new Person();
user2.name = "Joe";
user2.lastname = "Ray";
user2.age = 30;
console.log(user2.showFullname());

//Object Constructor
//const person = new Object();
const user22 = {
  name: "",
  lastname: "",
  age: 0,
  showFullname() {},
};
// ver las claves
console.log(Object.keys(user));

//new
const user23 = {
  name: "",
  lastname: "",
  age: 0,
};

function Person() {
  "use strict";
  this.name = "";
  this.lastname = "";
}

const person1 = new Person();

//=>PROTOTIPO O Prototype
function Person1(name, lastname) {
  this.name = name;
  this.lastname = lastname;
  this.displayname = function () {
    return `${this.name} ${this.lastname}`;
  };
}

const john = new Person("John", "Mcmillan");
const mario = new Person("mario", "Mcmillan");
const maria = new Person("maria", "Mcmillan");

Person.prototype.greet = function () {
  return `Hello I'm ${this.name}`;
};

console.log(john.greet());

//Otro ejemplo
const s = new String("Hello Word");
String.prototype.concatTest = function () {
  return this + "test";
};

console.log("My name is Matrix".concatTest());

console.log(s.concatTest);

//Orientacion de objetos basados en prototipos => JavaScript
// el prototipo solo hace referencia a la estructura de un constructor.

//=>CLASS
// Class : es una forma mas bonita de escribir las funciones.
//Las clases son un conjunto de mètodos
class Person {
  //Azucar sintantica
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
  greet() {
    return `I'm ${this.name} ${this.lastname}`;
  }
}
//instancia
const user7 = new Person("Joe", "Ray");
console.log(user.greet());

//=>Principios de OOP

//=> Asociaciòn
//=> Agregaciòn
//=>Composiciòn
//=>Encapsulaciòn
//=> Herencia
//=> Polimorfismo-Sobrecarga
//=> Polimorfismo parametrico
//=>Subtype Polimorfism
