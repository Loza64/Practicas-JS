// Simulated function to load data from an external source
function loadDataFromSource(source) {
 return new Promise((resolve, reject) => {
     setTimeout(() => {
         const data = `Data from ${source}`;
         // Simulate a successful scenario
         const success = true;

         if (success)
             resolve(data); // Resolve the promise with the data
         else
             reject(`Error loading data from ${source}`); // Reject the promise with an error message
     }, Math.random() * 2000); // Random delay between 0 and 2 seconds
 });
}

// Load data from multiple sources in parallel
const sources = ["Local Web Server", "DigitalOcean Server", "AWS Server"];

const promises = sources.map(source => loadDataFromSource(source));

// Combine data when all promises are resolved
Promise.all(promises)
    .then(data => {
        console.log("Data loaded successfully from all sources:", data);
        // Here you can combine and process the data as needed
    })
    .catch(error => {
        console.error("Error loading data from at least one source:", error);
    });