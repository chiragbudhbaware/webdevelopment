// Numbers 

let balance = 120;
let anotherbalance = new Number(120);

// console.log(balance);
// console.log(anotherbalance.valueOf());


// console.log(typeof(balance));
// console.log(typeof(anotherbalance));

// Boolean 

let isActive = true;
let isNotActive = new Boolean(true); // Not recommended

// console.log(typeof isActive);
// console.log(typeof isNotActive);

// Null and Undefined --> Mostly asked in interview

let firstname;   
// console.log(firstname);  // undefined means is not defined yet


// Strings

let myString = 'Hello';
let myString1 = 'Hola';
let userName = 'Chirag';

// let oldGreet = myString + "Chirag";
// console.log(oldGreet);

let greetMessage  = `Hello ${userName}`;
let demo = `Value is ${2 * 2}`;

// Symbol 

let sm1 = Symbol();
let sm2 = Symbol();

console.log(sm1 == sm2);




