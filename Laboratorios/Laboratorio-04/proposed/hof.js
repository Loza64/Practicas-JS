function generateGreetingFunction(timeOfDay) {
 return function (name) {
  return `Goog ${timeOfDay} morning ${name}`;
 }
}

const morning = generateGreetingFunction('Moorning');
console.log(morning('Loza'))