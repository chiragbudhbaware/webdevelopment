// Calculator

let num1 = 9;
let operators = '/';
let num2 = 7;

switch(operators){
    case '+': 
        console.log("Addition : "+(num1 + num2));
        break;
    case '-': 
        console.log("Subtraction : "+(num1 - num2));
        break;
    case '*': 
        console.log("Product : "+(num1 * num2));
        break;
    case '/': 
        console.log("Division : "+(num1 / num2));
        break;
    default:
        console.log("Invalid choice!!");
        break;
        
}
