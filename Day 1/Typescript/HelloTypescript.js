var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// var msg = "Hello Typescript !"; // Type Inference
// msg = 100;
var msg = "Hello Typescript !"; // Type Annotation
console.log(msg);
var n;
var b;
var o;
var a = 10; // avoided
a = "Hello !";
a = true;
var t;
// 10 lines
var t;
function Test() {
    if (true) {
        var x_1 = 100; // ES6 - Block Scoping
        // 10 lines
        //  let x = 20; // Redeclaration not allowed !
    }
    //   console.log(x);
}
var x;
x = 200;
var PI = 3.14;
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
var cars = ["BMW", "AUDI", "MERC"];
// let firstCar, secondCar;
// firstCar = cars[0];
// secondCar = cars[1];
var firstCar = cars[0], thirdCar = cars[2];
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
var person = { fullname: "Djokovic", country: "Serbia", sport: "Lawn Tennis" };
var sport = person.sport, country = person.country, fname = person.fullname;
console.log(fname);
// Functions
function Add(x, y) {
    if (x > 0) {
        return "X should be greater than 0 !";
    }
    return x + y;
}
var result = Add(10, 20);
// Class
var Car = /** @class */ (function () {
    function Car(name, speed) {
        if (name === void 0) { name = "BMW"; }
        if (speed === void 0) { speed = 200; }
        this.name = name;
        this.speed = speed;
    }
    Car.prototype.accelerate = function () {
        return "The car " + this.name + " is running @ " + this.speed + " kmph !";
    };
    return Car;
}());
// var carObj = new Car("Audi");
// console.log(carObj.accelerate());
var JamesBondCar = /** @class */ (function (_super) {
    __extends(JamesBondCar, _super);
    function JamesBondCar(name, speed, canFly) {
        if (name === void 0) { name = "BMW"; }
        if (speed === void 0) { speed = 300; }
        if (canFly === void 0) { canFly = true; }
        var _this = _super.call(this, name, speed) || this; // calls base class ctor
        _this.canFly = canFly;
        return _this;
    }
    JamesBondCar.prototype.accelerate = function () {
        return _super.prototype.accelerate.call(this) + "Can it fly ? " + this.canFly;
    };
    return JamesBondCar;
}(Car));
var jbc = new JamesBondCar("Aston Martin", 400, true);
console.log(jbc.accelerate());
var company = {
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
var Square = function (x) { return x * x; };
// function Addition(x: number, y: number) {
//   return x + y;
// }
// OR
var Addition = function (x, y) { return x + y; };
// Functions - Generic
function Swap(x, y) {
    var temp;
    temp = x;
    x = y;
    y = temp;
}
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var point = new Point();
