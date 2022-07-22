//1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function palindromo (palavra) {
    let palavraInvertida = '';
    for (let index = (palavra.length - 1); index >= 0; index -= 1) {
        palavraInvertida = palavraInvertida + palavra[index];
    }
    if (palavra == palavraInvertida) {
        return 'True!';
    }
    else {
        return 'False!';
    }
}
console.log(palindromo('arar'));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//Valor esperado no retorno da função: 4.

let numeros = [2, 3, 6, 7, 10, 1];

function indiceMaior (numeros) {
    return numeros.indexOf(Math.max.apply(null, numeros));
}

console.log(indiceMaior(numeros));

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
//Valor esperado no retorno da função: 6.

let numeros1 = [2, 4, 6, 7, 10, 0, -3];

function indiceMenor (numeros1) {
    return numeros1.indexOf(Math.min.apply(null, numeros1));
}

console.log(indiceMenor(numeros1));

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
//Valor esperado no retorno da função: Fernanda.

let pessoas1 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome (pessoas1) {
    let quantLetras = [];
    for (let index1 = 0; index1 < pessoas1.length; index1 += 1) {
        quantLetras.push(pessoas1[index1].length);
    }
    return pessoas1[quantLetras.indexOf(Math.max.apply(null, quantLetras))];
}
console.log(maiorNome(pessoas1));

//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
//Valor esperado no retorno da função: 2.

let numeros2 = [7, 3, 2, 7, 8, 7, 3];

function numRepetidos (numeros2) {
    let repeticoes = [];
    for (let index of numeros2) {
        let soma = 0;
        for (let index2 of numeros2){
            if (index == index2){
                soma = soma + 1
            }
        }
        repeticoes.push(soma)
    }
    return numeros2[repeticoes.indexOf(Math.max.apply(null, repeticoes))];
}
console.log(numRepetidos(numeros2));

//6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de 
//todos os números de 1 até N.
//Valor de teste: N = 5.
//Valor esperado no retorno da função: 1+2+3+4+5 = 15.

let n = 5;

function somatorio (n) {
    let soma = 0;
    for (let index = 0; index <= n; index += 1) {
        soma = soma + index;
    }
    return soma;
}
console.log(somatorio(n));

//7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é 
//o final da string word. Considere que a string ending sempre será menor que a string word.
//verificaFimPalavra('joaofernando', 'fernan');

let palavra2 = 'trybe';
let palavra3 = 'be';


function verificaFimPalavra(palavra2, palavra3) {
    let palavra4 = [];
    for (let index = (palavra2.length - palavra3.length); index < palavra2.length; index += 1) {
        palavra4 = palavra4 + palavra2[index];
    }
    if (palavra3 == palavra4) {
        return 'true';
    }
    else {
        return 'false';
    }
}

console.log(verificaFimPalavra(palavra2, palavra3))
