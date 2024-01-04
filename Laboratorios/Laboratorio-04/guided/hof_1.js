// Define a higher-order function
function operate(operation, x, y) {
 return operation(x, y);
}

// Define some basic operations as functions
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
// Conditional (ternary) operator
// condition ? exprIfTrue : exprIfFalse
const divide = (x, y) => (y !== 0) ? x / y : "Cannot divide by zero.";

// Using the higher-order function with different operations
let result1 = operate(add, 5, 3);
console.log("Addition result:", result1);

let result2 = operate(subtract, 10, 4);
console.log("Subtraction result:", result2);

let result3 = operate(multiply, 6, 2);
console.log("Multiplication result:", result3);

let result4 = operate(divide, 8, 2);
console.log("Division result:", result4);