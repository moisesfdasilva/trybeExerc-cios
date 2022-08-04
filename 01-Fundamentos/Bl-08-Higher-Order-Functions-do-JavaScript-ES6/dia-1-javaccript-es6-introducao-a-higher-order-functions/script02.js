// 1
const nameFunction = (name) => {
  const newName = name.replace(' ','');
  const email = `${newName.toLowerCase()}@trybe.com`;
  return { nomeCompleto: name, email: email}
};

const newEmployees = () => {
  const employees = {
    id1: nameFunction('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: nameFunction('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: nameFunction('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
console.log(newEmployees());

// 2

const aleatoryNumber = () => {
  const newNumber = Math.round(Math.random() * (5 - 1) + 1);
  return newNumber;
};

const checkMyNumber = (number) => {
  let result = [];
  if (number === aleatoryNumber()) {
    result = "Parabéns você ganhou";
  } else {
    result = "Tente novamente";
  }
  return result;
};
console.log(checkMyNumber(2));

// 3

const analyseArray = (firstArray, secondArray) => {
  const result = [];
  for (let index = 0; index < firstArray.length; index += 1) {
    if (secondArray[index] === 'n.a') {
      result.push(0);
    } else if (firstArray[index] === secondArray[index]) {
      result.push(1);
    } else {
      result.push(-0.5);
    }
  }
  return result;
};

function points(firstArray, secondArray, analyseArray) {
  const abc = analyseArray(firstArray, secondArray);
  let result = 0;
  
  for(let index of abc) {
    result += index;
  }
  
  return result;
}

const firstArray = ['b', 'd', 'a', 'c', 'b', 'b', 'd', 'c', 'b', 'b'];
const secondArray = ['a', 'd', 'a', 'c', 'b', 'a', 'a', 'c', 'n.a', 'n.a'];
console.log(points(firstArray, secondArray, analyseArray));
