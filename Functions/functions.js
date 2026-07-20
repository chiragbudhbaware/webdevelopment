// Function --> A block of code that perform particular task

function sayHello(){
    console.log("Hello, Chirag!");
}

// Parameters

function add(num1, num2){  // Here num1 and num2 are the arguments
    console.log(num1 + num2);
}

// add(12,21);  // Here 12 and 21 are parameters

// Functions for multiplication

// function prod(num1 , num2){
//     console.log(num1 * num2); // This is not the good way
// }

function prod(num1, num2){
    return num1 * num2;     // This is the best production ready-way
}

let ans = prod(4, 5);
// console.log("The result is "+ans);



// Unlimited Argument access

function addNumbers(){
    let ans = 0;
    for(let i=0; i<arguments.length; i++){
        ans += arguments[i];
    }
    return ans;
}

// Method - 2

function addNumbersV2(...numbers){
    let ans = 0;
    for(let i=0; i<numbers.length; i++){
        ans += numbers[i];
    }
    return ans;
}

let result = addNumbersV2(10,32,45,23,98,100,2);
console.log(result);

