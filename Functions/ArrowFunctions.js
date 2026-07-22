// ARROW FUNCTIONS

// 1. Syntax 

const sayHello = () => {
    console.log("Hey!");
};

const add = (num1, num2) => {
    return num1 + num2;
};

const addV2 = (num1, num2) => num1 + num2;  // This is One-Liner approach

// 'argument ' keywords

const addNums = (...numbs) => {
    let sum = 0;
    for(let i = 0; i < numbs.length; i++){
        sum += numbs[i];
    }
    return sum;
}

let res = addNums(10, 20, 30, 40);


// 3. 'Hoisting' --> Hoisting is used in normal function but it can not be used in Arrow function.
//                   It is used to call function before initialization.

// sayHey();

// function sayHey(){
//     console.log('Hello!');
    
// }

// sayHey();               // We cannot initialized arrow function before initialization

const sayHey = () => {
    console.log('Hello!');
    
}

// 4. This Keyword

// Normal function

// const obj = {                 // In this function this keyword represent only under the Obj
//     value : 20,
//     myFunction : function(){
//         console.log(this.value);
//     }
// };

const obj = {                  // In this function this keyword is represented global Obj
    value : 20,
    myFunction : () => {
        console.log(this);
    }
};

obj.myFunction();




