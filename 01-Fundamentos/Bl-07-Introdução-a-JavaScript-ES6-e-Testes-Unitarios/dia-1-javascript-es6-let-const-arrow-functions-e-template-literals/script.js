// Parte I
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
  // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

const oddsAndEvens = (newArray) => {
  let a = [];
  for (let index2 = 0; index2 < (newArray.length - 1); index2 += 1) {
    for (let index1 = 1; index1 < newArray.length; index1 += 1) {
      if (newArray[index1 - 1] > newArray[index1]) {
        a = newArray[index1 - 1];
        newArray[index1 - 1] = newArray[index1];
        newArray[index1] = a;
      }
    }
  }
  return `Os números ${newArray} se encontram ordenados de forma crescente!`;
};

console.log(oddsAndEvens([13, 3, 4, 10, 7, 2]));

const b = (newArray) => (newArray.sort((a, b) => a - b));

console.log(b([13, 3, 4, 10, 7, 2]));

// Parte II

const factorial = (n) => {
  let fac = 1;
  for (let index = 1; index <= n; index += 1) {
    fac = index * fac;
  }
  return fac;
}
console.log(factorial(4));

const longestWord = (sentence) => {
  sentence = sentence.split(` `);
  a = sentence[0];
  for (let index = 1; index < sentence.length; index += 1) {
    a = (a.length > sentence[index].length) ? a : a = sentence[index];
  }
  return a;
}
console.log(longestWord('Antônio foi no banheirooooou e não sabemos o que aconteceu'));

// let click = 0;
// document.getElementsByTagName(`html`)[0].addEventListener(`click`, () => {
//   click += 1;
//   console.log(click);
// })

const textoNovo = (nome) => {
  const frase = `Tryber x aqui!`;
  return frase.replace(`x`, nome);
}

console.log(textoNovo('Bebeto'));

const funcao1 = (textoNovo) => {
  const skills = ['shell', 'git', 'gitHub'];
  return `${textoNovo} Minhas três principais habilidades são: ${skills}`;
}

console.log(funcao1(textoNovo('Bebeto')));