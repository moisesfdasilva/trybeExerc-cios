//Bônus
//1 - (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

const romanos = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
const arabico = [1, 5, 10, 50, 100, 500, 1000];
let numRom = 'DXXVIII';
let numAra1 = [];
let numAra2 = 0;

for(let index = 0; index < numRom.length; index += 1) {
  for(let jndex = 0; jndex < romanos.length; jndex += 1) {
    if(numRom[index] === romanos[jndex]) {
      numAra1.push(arabico[jndex])
    }
  }
}

for(let index = 0; index < numAra1.length; index += 1) {
  if(numAra1[index] < numAra1[index + 1]) {
    numAra2 = numAra2 - numAra1[index];
  } else if(numAra1[index] > numAra1[index + 1]) {
    numAra2 = numAra2 + numAra1[index];
  } else {
    numAra2 = numAra2 + numAra1[index];
  }
}
console.log(numAra2);

// 2 - Crie uma função chamada arrayOfNumbers que receberá a variável 
// vector como parâmetro. Através de um loop for, percorra essa variável, 
// busque os números pares e os adicione a um novo array que deverá ser 
// retornado ao final pela pela função.

function arrayOfNumbers(vector) {
  let newArray = [];
  for(let index1 = 0; index1 < vector.length; index1 += 1) {
    for(let index2 = 0; index2 < vector[index1].length; index2 += 1) {
      if(vector[index1][index2] % 2 === 0) {
        newArray.push(vector[index1][index2]);
      }
    }
  }
  return newArray;
}

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
console.log(arrayOfNumbers(vector));

// 3 - A partir do array de frutas basket, retorne um objeto que contenha o 
// nome da fruta como chave e a quantidade de vezes que ela aparece no array 
// como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 
// 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } 
// quando passado como argumento para a função.
// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte 
// formato: Sua cesta possui: x Melancias, x Abacates...

function basket(fruitsArray) {
  let listOfFruit = [];
  let newListOfFruit = [];
  let objListOfFruit = {};
  
  // Cria um novo array (listOfFruit) do tipo 'fruta: 11'.
  for (let index1 = 0; index1 < fruitsArray.length; index1 += 1) {
    let count = 0;
    for (let index2 = 0; index2 < fruitsArray.length; index2 += 1) {
      if (fruitsArray[index1] === fruitsArray[index2]) {
        count += 1;
      }
    }
    listOfFruit.push(`${fruitsArray[index1]} ${count}`);
  }
  
  // Cria um novo array removendo as repetições do array 'listOfFruit'.
  newListOfFruit.push(listOfFruit[0]);
  for (let index1 = 0; index1 < listOfFruit.length; index1 += 1) {
    let count = 0;
    for (let index2 = 0; index2 < newListOfFruit.length; index2 += 1) {
      if(listOfFruit[index1] === newListOfFruit[index2]) {
        count += 1;
      }
    }
    if(count < 1) {
      newListOfFruit.push(listOfFruit[index1]);
    }
  }

  // Cria um objeto (nome) a partir do array newListOfFruit.
  for (let index = 0; index < newListOfFruit.length; index += 1) {
    let fix = newListOfFruit[index].split(' ');
    objListOfFruit[fix[0]] = parseInt(fix[1]);
  }

  return objListOfFruit;
}

const fruitsArray = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];
console.log(basket(fruitsArray));

// 4 - Acesse as chaves nome, sobrenome, andar e apartamento do último 
// morador do blocoDois e faça um console.log no seguinte formato: 
// "O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101".
// 5 - Utilize o for para imprimir o nome completo de todos os moradores do 
// bloco 1, acessando suas chaves nome e sobrenome, depois faça o mesmo 
// para os moradores do bloco 2.

let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

for (let index in moradores.blocoUm) {
  let printMsg = `O morador do bloco 1 de nome ${moradores.blocoUm[index]['nome']} mora no ${moradores.blocoUm[index]['andar']}° andar, apartamento ${moradores.blocoUm[index]['apartamento']}°.`;
  console.log(printMsg);
}
for (let index in moradores.blocoDois) {
  let printMsg = `O morador do bloco 2 de nome ${moradores.blocoDois[index]['nome']} mora no ${moradores.blocoDois[index]['andar']}° andar, apartamento ${moradores.blocoDois[index]['apartamento']}°.`;
  console.log(printMsg);
}
