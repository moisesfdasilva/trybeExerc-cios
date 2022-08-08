//  Spread Operator

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['abacaxi', 'uva', 'cereja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['maçã', 'banana', 'manga'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};
console.log(fruitSalad(specialFruit, additionalItens));

// Parâmetro Rest: function quantosParams(...args)

// 1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com 
// informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise. 
// Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. 
// Para isso, utilize o spread operator.

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const trappistEnterprise = {...user, ...jobInfos};
console.log(trappistEnterprise);

// 2 - Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado anteriormente. 
// Para isso, utilize a desestruturação de objetos em conjunto com template literals.
// Exemplo "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my 
// squad is RLL-Rocket Landing Logic"

const {name, age, nationalityy, profession, squad, squadInitials} = trappistEnterprise;
const a = `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationalityy}. I work as a ${profession} and my squad is ${squadInitials}-${squad}.`;
console.log(a);

// Array Destructuring
// 1 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.
const saudacoes = ['Olá', 'Tudo Bem?', 'Como vai?', 'Bom dia!', 'Boa tarde!', 'Boa noite!'];
const saudacao1 = saudacoes[0];
const saudacao2 = saudacoes[1];
console.log(saudacao1, saudacao2, 'Moisés');

// Produza o mesmo resultado acima, porém utilizando array destructuring
// 2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays,
// corrija os valores das variáveis.
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';
const itens = [comida, animal, bebida];
comida = itens[2];
animal = itens[0];
bebida = itens[1];
console.log(comida, animal, bebida);

// 3 - array abaixo possui alguns números que não condizem com o conteúdo que ele 
// deveria possuir. Através de array destructuring, faça com que existam apenas números 
// pares na variável numerosPares.
let numerosPares = [1, 3, 5, 6, 8, 10, 12];
const numPar1 = numerosPares[3];
const numPar2 = numerosPares[4];
const numPar3 = numerosPares[5];
const numPar4 = numerosPares[6];
numerosPares = [numPar1, numPar2, numPar3, numPar4];

console.log(numerosPares); // [6, 8, 10, 12];

// Default Destructuring
// Do jeito que está, quando passamos person para a função GetNationality o retorno é 
// João is undefined. Ajuste a função GetNationality para que a chamada GetNationality
// (person) retorne João is Brazilian.
const getNationality = ({ firstName, nationality = "Brazilian" }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

// Object Property Shorthand
const getPosition = (latitude, longitude) => ({
  latitude: latitude,
  longitude: longitude});

console.log(getPosition(-34.4333, -12.3456));

// Default Parameters
const multiply = (number, value) => {
  const newValue = (typeof value === 'undefined') ? '1' : value;
  return number * newValue;
};

console.log(multiply(8));
