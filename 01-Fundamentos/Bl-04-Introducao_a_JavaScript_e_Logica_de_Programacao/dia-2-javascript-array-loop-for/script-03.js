let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
for (let index of numbers) {
    console.log(index);
}

//2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
    sum = sum + numbers[index]
}
console.log(sum);

//3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

console.log(sum/numbers.length)

//4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"; 

if ((sum/numbers.length)>=20){
    console.log("valor maior que 20");
}
else{
    console.log("valor menor ou igual a 20");
}

//5. Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let maior = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (maior >= numbers[index]) {
        maior = maior
    }
    else {
        maior = numbers[index]
    }
}
console.log(maior);

//6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let impar = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 > 0) {
        impar = impar + 1
    }
    else {
        impar = impar
    }
}
if (impar > 0) {
    console.log("Valores ímpares =", impar);
}
else {
    console.log("nenhum valor ímpar encontrado");
}

//7. Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let menor = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (menor <= numbers[index]) {
        menor = menor
    }
    else {
        menor = numbers[index]
    }
}
console.log(menor);

//8. Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let a = [];

for (let index = 1; index <= 25; index += 1) {
    a.push(index);
}

console.log(a);

//9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

for (let index of a) {
    console.log(index/2)
}