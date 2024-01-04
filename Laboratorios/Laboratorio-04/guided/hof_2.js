// Define a higher-order function that generates power functions
function generatePowerFunction(exponent) {
 // The returned function calculates the nth power of a given number
 return function (base) {
   return Math.pow(base, exponent);
 };
}

// Generate power functions for different exponents
const square = generatePowerFunction(2);
const cube = generatePowerFunction(3);

// Use the generated functions
console.log("Square of 5:", square(5)); // Output: 25
console.log("Cube of 3:", cube(3)); // Output: 27