// Create a function that returns a promise
function performAsynchronousTask() {
 return new Promise((resolve, reject) => {
  // Simulate an asynchronous task (for example, an HTTP request)
  setTimeout(() => {
   const success = true; // Change to 'false' to simulate an error
   if (success) {
    resolve('The task was completed successfully.');
   } else {
    reject('There was an error in the task.');
   }
  }, 2000); // Simulate 2 seconds delay
 });
}