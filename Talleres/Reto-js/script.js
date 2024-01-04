let url = 'https://v2.jokeapi.dev/joke/Any?type=twopart&amount=10';
let url2 = 'https://v2.jokeapi.dev/joke/Any?type=single&amount=10';

function paragraft(text) {
 let texto = text.split('\n');
 return texto.map(item => item);
}


const fetchUrl = async () => {

 let arreglo = [];
 let ruta = await fetch(url);
 let arr = await ruta.json();

 let ruta2 = await fetch(url2);
 let arr2 = await ruta2.json();

 arreglo = [...arr.jokes, ...arr2.jokes]

 let arregloDos = arreglo.map(item => item.type === 'single' ? {
  type: item.type,
  category: item.category,
  text: paragraft(item.joke),
  flags: item.flags,
  id: item.id,
  safe: item.safe,
  lang: item.lang
 } : {
  type: item.type,
  category: item.category,
  text: item.joke,
  flags: item.flags,
  id: item.id,
  safe: item.safe,
  lang: item.lang
 });
 console.log(arregloDos)
}

fetchUrl()