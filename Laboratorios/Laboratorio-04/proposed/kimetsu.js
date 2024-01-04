const defaultOptions = {
 lenguage: "en",
 notifications: true
}

const user = {
 name: "Roberto",
 age: 20
}

console.log({...user,...defaultOptions});