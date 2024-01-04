const topic = ["Goku", "Jiren", "Vegeta"]

function MyPromise(data) {
 return new Promise((reject, resolve) => {
  setTimeout(() => {
   const info = data + " is a strong warrior";
   if (Math.random() > 0.5) {
    resolve(info);
   } else {
    reject(`Error loading data from ${data}`);
   }
  }, Math.random() * 4000)
 })
}

const promiseList = topic.map(item => MyPromise(item));

Promise.allSettled(promiseList).then(data => {
 console.log(data)
}).catch(err => {
 console.error(err)
})