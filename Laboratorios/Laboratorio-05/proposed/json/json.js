const linusTorvalds = '{"name":"Linus Benedict Torvalds", "birthday":"28/12/1969","nationality":"Finnish","age":53,"creatorOf":[{"technology":"Linux Kernel","description":"Open-source Unix-like operating system core"},{"technology":"Git","description":"Distributed version control system"}],"occupation":"Software Engineer","educationLevel":"Master\'s degree in Computer Science","university":"University of Helsinki","hobbies":["Soccer","VideoGames","Guitar","Math"],"favoriteColor":"Blue","height":177}';

const jsonObject = JSON.parse(linusTorvalds);

console.log("name:",jsonObject.name);
console.log("birthday:",jsonObject.birthday);
console.log("hobbies:",jsonObject.hobbies);
console.log("nationality:",jsonObject.nationality);
console.log("age:",jsonObject.age);
console.log("Tegonologia",jsonObject.creatorOf[0].technology ?? "Not fund"); 
console.log("Description",jsonObject.creatorOf[1].description ?? "Not fund");
console.log("occupation:",jsonObject.occupation);
console.log("educationLevel:",jsonObject.educationLevel);
console.log("university:",jsonObject.university);
console.log("all hobbies" , jsonObject.hobbies)
console.log("hobbies with length > 5", jsonObject.hobbies.filter(item => item.length > 5))
console.log("--------------------------------------------------------")
console.log("Hobbies:")
jsonObject.hobbies.forEach(item => console.log(item))

console.log(linusTorvalds.creatorOf[2].technology ?? "Not found"); // No mostraria nada porque no hay un tercer elemento ademas que esta mal escrito la variable
