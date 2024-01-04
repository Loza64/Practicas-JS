function getDataFromServer() {
 return new Promise((resolve, reject) => {
  setTimeout(() => {
   resolve(
    {
     _id: "fhq93048hfw9qhvq9w0eh09q87rhg0q87fhqw870fh",
     name: "Loza",
     caerer: "Ingenieria en informática",
     age: 20
    }
   )
  }, 3000)
 }
 );
}

getDataFromServer().then((data) => {
 console.log("Data successfully obtained from server");
 console.log("Id: " + data._id);
 console.log("Name: " + data.name);
 console.log("Age: " + data.age);
 console.log("Caerer: " + data.caerer);
})