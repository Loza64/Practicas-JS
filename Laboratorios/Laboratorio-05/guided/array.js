let removedElement;
let arr = [1, 2, 3];
arr.push(4); // arr se convierte en [1, 2, 3, 4]

removedElement = arr.pop(); // removedElement es igual a 3, arr se convierte en [1, 2]
console.log(removedElement)

arr.unshift(1); // arr se convierte en [1, 2, 3, 4]

removedElement = arr.shift(); // removedElement es igual a 1, arr se convierte en [2, 3]
console.log(removedElement)

arr.splice(2, 2, 'a', 'b'); // arr se convierte en [1, 2, 'a', 'b', 5]

let joinedString = arr.join(', '); // joinedString es igual a "Hola, Mundo"

arr.reverse(); // arr se convierte en [3, 2, 1]

let isArr = Array.isArray(arr); // isArr es igual a true

let arrString = arr.toString(); // arrString es igual a "1,2,3"