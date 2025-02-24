// var msg = "Hello Typescript !"; // Type Inference
// msg = 100;
var msg: string = "Hello Typescript !"; // Type Annotation
console.log(msg);
var n: number;
var b: boolean;
var o: object;
var a: any = 10; // avoided
a = "Hello !";
a = true;

var t;
// 10 lines
var t;
function Test() {
  if (true) {
    let x = 100; // ES6 - Block Scoping
    // 10 lines
    //  let x = 20; // Redeclaration not allowed !
  }
  //   console.log(x);
}
let x;
x = 200;

const PI = 3.14;
// PI = 3.14656;

// const person = { name: "Djokovic", sport: "Tennis" };
// // person = { name: "Alcaraz" }; // reallocation of new memory not allowed !
// person.name = "Alcaraz"; // changes to object properties allowed !

// Arrays
// var cars: string[] = ["BMW", "AUDI", "MERC"];
// Generics
// var moreCars: Array<string> = new Array<string>("TATA", "MARUTI");

// Spread Operator - ARrays & Objects
// Array
// var cars: string[] = ["BMW", "AUDI", "MERC"];
// var moreCars: string[] = ["TATA", "HYUNDAI"];
// var allCars: string[] = [...cars, ...moreCars];
// console.log(allCars);

// // Object
// let person = { name: "Djokovic", country: "Serbia", sport: "Lawn Tennis" };
// let player = { ...person, sport: "Tennis", IsSeeded: true, rank: 4 };
// console.log(player);

// Destructuring
var cars: string[] = ["BMW", "AUDI", "MERC"];
// let firstCar, secondCar;
// firstCar = cars[0];
// secondCar = cars[1];

let [firstCar, , thirdCar] = cars;
console.log(thirdCar);

// Object
// let person = { lname: "Djokovic", country: "Serbia", sport: "Lawn Tennis" };
// let { sport, country } = person;

// function DisplayPerson({ lname, sport }) {
//   console.log("The person " + lname + " plays " + sport);
// }

// DisplayPerson(person);

// function ReturnPerson() {
//   // ajax
//   return {
//     lname: "Djokovic",
//     country: "Serbia",
//     sport: "Lawn Tennis",
//     test: function () {
//       console.log("Testing 123");
//     },
//   };
// }

// let { country, sport, test } = ReturnPerson();

// Alias
let person = { fullname: "Djokovic", country: "Serbia", sport: "Lawn Tennis" };
let { sport, country, fullname: fname } = person;
console.log(fname);

// Functions
function Add(x: number, y: number): number | string {
  if (x > 0) {
    return "X should be greater than 0 !";
  }
  return x + y;
}

let result: number | string = Add(10, 20);

// Class

class Car {
  name: string;
  speed: number;
  constructor(name: string = "BMW", speed: number = 200) {
    this.name = name;
    this.speed = speed;
  }

  accelerate(): string {
    return "The car " + this.name + " is running @ " + this.speed + " kmph !";
  }
}

// var carObj = new Car("Audi");
// console.log(carObj.accelerate());

class JamesBondCar extends Car {
  canFly: boolean;
  constructor(
    name: string = "BMW",
    speed: number = 300,
    canFly: boolean = true,
  ) {
    super(name, speed); // calls base class ctor
    this.canFly = canFly;
  }
  accelerate(): string {
    return super.accelerate() + "Can it fly ? " + this.canFly;
  }
}

var jbc = new JamesBondCar("Aston Martin", 400, true);
console.log(jbc.accelerate());

// class BatmanCar extends JamesBondCar{
// }

// Interfaces

// interface ICompany {
//   name: string;
//   location: string;
// }

// var company: ICompany = { name: "DBS", location: "HYD", xyz: 123 };

// class Company implements ICompany {
//   name: string;
//   location: string;
// }

type TCompany = {
  name: string;
  location: string;
  getdetails: () => void;
};
var company: TCompany = {
  name: "DBS",
  location: "HYD",
  getdetails: function () {
    console.log("Get details !");
  },
};

// Arrow Functions
// Function Declaration
// function Square(x) {
//   return x * x;
// }

// Function as an expression
// var Square = function (x) {
//   return x * x;
// };

// Square(10);

// Arrow Functions ->
// var Square = x => {
//   return x * x;
// };
// OR
var Square = (x: number) => x * x;

// function Addition(x: number, y: number) {
//   return x + y;
// }

// OR
var Addition = (x: number, y: number): number => x + y;

// Functions - Generic

function Swap<T>(x: T, y: T) {
  let temp: T;

  temp = x;
  x = y;
  y = temp;
}

class Point<T,V> {
  x: T;
  y: V;
}

var point = new Point<number,string>();
