const isEven = (n) => n % 2 == 0;

let printMessage = (evenFunc, num) => {
  const isNumEven = evenFunc(num);
  console.log(`The number ${num} is an even number: ${isNumEven}.`)
}

// Pass in isEven as the callback function
printMessage(isEven, 4); 
// Output: The number 4 is an even number: True.