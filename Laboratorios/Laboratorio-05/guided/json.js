const jsonString = '{"name":"Sergio (Checo) Perez","age":33,"city":"Guadalajara","occupation":"Racing driver"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);

const personObject = {
 name: "Sergio (Checo) Perez",
 age: 33,
 city: "Guadalajara",
 occupation: "Racing driver"
};

const personString = JSON.stringify(personObject);
console.log(personString);

const taskString = '{"tasks":[{"id":1,"description":"Buy milk","completed":false},{"id":2,"description":"Exercise","completed":true},{"id":3,"description":"Send an email","completed":false}]}';
const tasksObject = JSON.parse(taskString);

console.log(tasksObject);

console.log("\nFirst task id:");
console.log(tasksObject.tasks[0].id ?? "Not found");

console.log("\nSecond task completed status:");
console.log(tasksObject.tasks[1].completed ?? "Not found");

console.log("\nThird task description:");
console.log(tasksObject.tasks[2].description ?? "Not found");

console.log("\nNon existing task description:");
console.log(tasksObject.tasks[3]?.description ?? "Not found");

console.log("\nFirst task non existing prop:");
console.log(tasksObject.tasks[0].title ?? "Not found");