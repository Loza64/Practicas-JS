// Rest parameter in functions
function sumNumbers(...numbers){
 const sum = numbers.reduce((prev, value) => {
  return prev + value;
}, 0);

console.log(`La suma es ${sum}`);
}

console.log("------------------\n");

console.log("Spread como Rest Parameter \n");
console.log("\nEnviando 3 números: ");
sumNumbers(1, 2, 3);
console.log("\nEnviando 5 números: ");
sumNumbers(1, 2, 3, 4, 5);
console.log("\nEnviando 7 números: ");
sumNumbers(1, 2, 3, 4, 5, 6, 7);

console.log("------------------\n");