// Exercícios Propostos - Prof. Carol
// 1 - Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é:

function sumNumber() {
  const numA = 1;
  const numB = 50;
  let sum = 0;

  for (let index = numA; index <= numB; index += 1) {
    sum = sum + index;
  }
  return sum;
}
console.log(sumNumber());

//2 - Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

function shareThree() {
  const a = 2;
  const b = 150;
  let count = 0;
  
  for(let index = a; index <= b; index += 1) {
    if(index % 3 === 0) {
      count += 1;
    }
  }
  if(count === 50) {
    count = 'Mensagem secreta!'
  }
  return count;
}
console.log(shareThree());

// 3 - Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que 
// são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".

function game(){
  const play1 = ['pedra', 'pedra', 'pedra', 'papel', 'papel', 'papel', 'tesoura', 'tesoura', 'tesoura'];
  const play2 = ['pedra', 'papel', 'tesoura', 'pedra', 'papel', 'tesoura', 'pedra', 'papel', 'tesoura'];
  const result = ['A Ties', 'Player 2 won', 'Player 1 won', 'Player 1 won', 'A Ties', 'Player 2 won', 'Player 2 won', 'Player 1 won', 'A Ties'];
  const player1 = 'pedra';
  const player2 = 'tesoura';

  for(let index = 0; index < result.length; index += 1) {
    if(play1[index] === player1 && play2[index] === player2) {
      return result[index];
    }
  }
}
console.log(game());

//4 - Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

const age = 17;
const maiority = (age < 18) ? `A pessoa não é maior de idade`: `A pessoa é maior de idade`;
console.log(maiority);

//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

const carolzitaAge = 11;
const muriloAge = 11;
const baetaAge = 11;

const arrayNames = ['Carolzita' , 'Murilo', 'Baêta'];
const arrayAge = [carolzitaAge, muriloAge, baetaAge];
const minAge = Math.min.apply(null, arrayAge);
let nameMin = [];
let nameMin1 = [];

for(let index = 0; index < arrayAge.length; index += 1) {
  if(arrayAge[index] === minAge && nameMin.length === 0) {
    nameMin = `${arrayNames[index]}`;
    nameMin1 = `${nameMin} é(são) a(s) mais nova(s).`;
  } else if(arrayAge[index] === minAge) {
    nameMin = `${nameMin} e ${arrayNames[index]}`;
    nameMin1 = `${nameMin} são as mais novas.`;
  }
}

console.log(nameMin1);
