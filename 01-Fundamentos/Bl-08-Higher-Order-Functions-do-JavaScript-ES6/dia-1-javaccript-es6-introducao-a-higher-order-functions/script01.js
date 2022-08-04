// 1 - Crie uma função que retorne a string 'Acordando!!';
// 2 - Crie outra função que retorne a string 'Bora tomar café!!';
// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!';
// 4 - Agora desenvolva uma HOF chamada doingThings e 
// configure esta função para que imprima no console o resultado da execução 
// das funções que você criou nos exemplos anteriores.

const wakeUp = () => {
  return 'Acordando!!';
};

const breakfast = () => {
  return 'Bora tomar café!!';
};

const sleep = () => {
  return 'Partiu dormir!!';
};

function doingThings() {
  const result = `Às 6:30... ${wakeUp()} Alguns minutos após... ${breakfast()}. Em torno de 23:45... ${sleep()}`;
  return result;
}
console.log(doingThings());