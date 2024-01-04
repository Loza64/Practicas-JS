const yugiohCards = [
 "Dark Magician",
 "Blue-Eyes White Dragon",
 "Exodia the Forbidden One",
 "Cyber Dragon",
 "Elemental HERO Neos",
 "Chaos Dark Magician",
 "Dark Magician Girl",
 "Gravekeeper's Spy",
 "Blue-Eyes Alternative White Dragon",
 "Meteor Dragon",
 "Dragunity - Ascalon",
 "Harpie Lady",
 "Winged Kuriboh",
 "Gamma the Magnet Warrior",
 "Chaos MAX Dragon",
 "Elemental HERO Burstinatrix",
 "The Winged Dragon of Ra",
 "Spirit of Flames",
 "Black Luster Soldier - Envoy of the Beginning",
 "Celtic Guardian",
 "Chaos Sorcerer",
 "Apocalypse Rider - Lord of Despair",
 "Yubel - The Ultimate Nightmare",
 "Terror King Archfiend",
 "Wolf in Sheep's Clothing",
 "Darklord Morningstar",
 "Exiled Force",
 "Obelisk the Tormentor",
 "Red-Eyes Black Dragon",
 "Elemental HERO Neos",
 "Stardust Dragon"
];
let extraCarts = [];
yugiohCards.push("Red-Eyes Black Dragon")
console.log(yugiohCards);
console.log("----------------------------------------------------------------")
console.log(yugiohCards.pop())
console.log(yugiohCards)
console.log("----------------------------------------------------------------")
console.log(yugiohCards.unshift("Black Luster Soldier - Envoy of the Beginning"))
console.log(yugiohCards)
console.log("----------------------------------------------------------------")
console.log(yugiohCards.shift())
console.log(yugiohCards)
console.log("----------------------------------------------------------------")
for (let index = 0; index < 3; index++) {
 extraCarts = [...extraCarts, yugiohCards[index]];
}
console.log(extraCarts)
console.log("----------------------------------------------------------------")
let allCarts = [...extraCarts, ...yugiohCards];
console.log(allCarts);
console.log("----------------------------------------------------------------")
let removeLastFive = allCarts.slice(-5)
console.log(removeLastFive);
console.log("----------------------------------------------------------------")
let reverse = allCarts.reverse();
console.log(reverse);
console.log("----------------------------------------------------------------")
console.log(allCarts.length >= 25 ? allCarts.length : "menor a 25")
console.log("----------------------------------------------------------------")
let jsonArray = JSON.stringify(allCarts);
console.log(jsonArray);