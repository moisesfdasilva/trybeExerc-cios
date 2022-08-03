// 1 - Escreva uma função que dado um array de nomes e um nome retorne 
// true se ele estiver contido e caso contrário, retorne false, use some;

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((index) => index === name);
}
console.log(hasName(names, 'Ana'));

// 2 - Escreva uma função que dado um array de pessoas e uma idade mínima 
// retorne true se todas tiverem a idade maior ou igual a mínima e caso 
// contrário false, use every;

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  const a = arr.every((index) => (index.age >= minimumAge ));
  return a;
}

console.log(verifyAges(people, 16));

// 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente.

const people2 = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people2.sort((a, b) => (a.age - b.age));
console.log(people2);

// 2 - Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente.
people2.sort((a, b) => (b.age - a.age));
console.log(people2);
