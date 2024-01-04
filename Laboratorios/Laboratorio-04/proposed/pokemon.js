const pokemon = [
 { name: 'Pikachu', type: 'Electric', level: 25 },
 { name: 'Bulbasaur', type: 'Grass', level: 20 },
 { name: 'Charizard', type: 'Fire', level: 36 },
 { name: 'Squirtle', type: 'Water', level: 18 },
 { name: 'Jigglypuff', type: 'Normal', level: 22 },
];

//Ejercicio 1
const searchByType = pokemon.filter(item => item.type === 'Fire');
const arrayType = [...searchByType];
console.log('searchByType');
console.log(JSON.stringify(arrayType));
console.log('-----------------------------------------------------------------------------------')


//Ejercicio 2
const searchByLevel = pokemon.filter(item => item.level > 30);
const arrayLevel = [...searchByLevel];
console.log('searchByLevel');
console.log(JSON.stringify(arrayLevel));
console.log('-----------------------------------------------------------------------------------')

//Ejercicio 3
const cantPokemons = pokemon.length;
console.log('cantPokemons: ', cantPokemons)