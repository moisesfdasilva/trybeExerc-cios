//1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.
//Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let fatorial = 10;
let resultado = 1;

for (let index = 1; index <= fatorial; index += 1) {
    resultado = resultado * index;
}

console.log(resultado)

//2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra.

let palavra = 'trybe';
let inverso;

for (index = palavra.length - 1; index >= 0; index -= 1) {
    if (index < palavra.length - 1) {
        inverso = inverso + palavra[index];
    }
    else {
        inverso = palavra[index]
    }
}

console.log(inverso);
palavra.length

//3- Considere o array de strings abaixo:
//3.1 - Retorne a maior palavra deste array
//3.2 - Retorne a menor palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length >= array[0].length && array[index].length >= array[1].length && array[index].length >= array[2].length && 
        array[index].length >= array[3].length && array[index].length >= array[4].length) {
        console.log(array[index]);
    }
}

//4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que 
//retorne o maior número primo entre 2 e 50.

let a = 2;
let b = 50;
let primos = [];
let quantidade = 0;

for (let index = a; index < b; index += 1) {
    for (let jndex = 1; jndex <= index; jndex += 1) {
        if (index % jndex == 0) {
            quantidade = quantidade + 1
        }
    }
    if (quantidade <= 2) {
        primos.push(index)
    }
    quantidade = 0
}
console.log(primos)
console.log(primos[(primos.length - 1)])
