//Algoritmo de ordenação, Bobble sort.
let v = [5, 3, 2, 4, 7, 1, 0, 6];
let auxiliar = '';

for (let jndex = 1; jndex < v.length; jndex +=1){
    for (let index = 1; index <= v.length; index += 1)
        if (v[index - 1] >= v[index]) {
            auxiliar = v[index];
            v[index] = v[index - 1];
            v[index - 1] = auxiliar;
    }
}
console.log(v);

//1. Ordene o array numbers em ordem crescente e imprima seus valores
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let substituicao = '';

for(let repeticao = 1; repeticao <= numbers.length; repeticao += 1) {
    for(let index = 1; index <=numbers.length; index += 1) {
        if (numbers[index -1] >= numbers[index]){
            substituicao = numbers[index];
            numbers[index] = numbers[index - 1];
            numbers[index - 1] = substituicao;
        }
    }
}
console.log(numbers);

//2. Ordene o array numbers em ordem decrescente e imprima seus valores;

let numbersA = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let substituicaoA = '';

for (let repeticaoA = 1; repeticaoA < numbersA.length; repeticaoA += 1) {
    for (let index = 1; index < numbers.length; index += 1) {
        if (numbersA[index - 1] <= numbersA[index]) {
            substituicaoA = numbersA[index];
            numbersA[index] = numbersA[index -1];
            numbersA[index -1] = substituicaoA;
        }
    }
}

console.log(numbersA);

//3. Multiplique os valores pelo valor do próximo elemento (se não houver próximo multiplique por 2);

let numbersB = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let substituicaoB = '';

for (let index = 0; index < numbersB.length; index += 1) {
    if (index < numbersB.length-1) {
        substituicaoB = numbersB[index] * numbersB[index + 1];
        numbersB[index] = substituicaoB;
    }
    else {
        substituicaoB = numbersB[index] * 2;
        numbersB[index] = substituicaoB;
    }
}
console.log(numbersB);

//3. Multiplique os valores pelo valor do próximo elemento (se não houver próximo multiplique por 2);
// Sem modificar number, com uso do for e push

let numbersC = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numberscNew = [];

for (let index = 0; index < numbersC.length; index += 1) {
    if (index < numbersC.length - 1) {
        numberscNew.push(numbersC[index] * numbersC[index + 1]);
    }
    else {
        numberscNew.push(numbersC[index] * 2);
    }
}

console.log(numberscNew)