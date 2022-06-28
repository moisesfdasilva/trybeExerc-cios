//1- Agora vamos trabalhar com algumas formas geométricas! 
//Faça um programa que, dado um valor n qualquer, seja n > 1, 
//imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let n = 5;

if (n > 1) {
    for (let index1 = 1; index1 <= n; index1 += 1) {
        let saida = [];
        for (let index2 = 1; index2 <= n; index2 += 1) {
            saida = saida + '*';
        }
        console.log(saida);
    }
}
else {
    console.log("O n deve ser maior que 1");
}

//2- imprima um triângulo retângulo com 5 asteriscos de base.

let n2 = 5;

if (n2 > 1) {
    for (let index1 = 1; index1 <= n2; index1 += 1) {
        let saida2 = [];
        for (let index2 = 1; index2 <= index1; index2 += 1) {
            saida2 = saida2 + '*';
        }
        console.log(saida2);
    }
}
else {
    console.log("O n deve ser maior que 1");
}

//3- faça a inversão do triangulo do exercício anterior.

let n3 = 5;

if (n3 > 1) {
    for (let index1 = 1; index1 <= n3; index1 += 1) {
        let saida2 = [];
        let saida3 = [];
        let ajuste = [];
        for (let index2 = 1; index2 <= index1; index2 += 1) {
            saida2 = saida2 + '*';
        }
        for (let index3 = 1; (index3 + saida2.length) <= n3; index3 += 1) {
            saida3 = saida3 + " ";
        }
        ajuste = saida3 + saida2;
        console.log(ajuste);
    }
}
else {
    console.log("O n deve ser maior que 1");
}

//4- faça uma pirâmide.

let n4 = 5;

if (n4 > 1) {
    for (let index1 = 1; index1 <= n4; index1 += 1) {
        let saida2 = [];
        let saida3 = [];
        let ajuste = [];
        for (let index2 = 1; index2 <= index1; index2 += 1) {
            saida2 = saida2 + '*';
        }
        for (let index3 = 1; index3 <= ((n4 - saida2.length) / 2); index3 += 1) {
            saida3 = saida3 + " ";
        }
        if (index1 % 2 > 0) {
            ajuste = saida3 + saida2;
            console.log(ajuste);
        }
    }
}
else {
    console.log("O n deve ser maior que 1 e ímpar");
}

// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio.

let n5 = 11;

if (n5 > 1) {
    for (let index1 = 1; index1 <= n5; index1 += 1) {
        let saida2 = [];
        let saida3 = [];
        let ajuste = [];
        if (index1 == 1 || index1 == n5){
            for (let index2 = 1; index2 <= index1; index2 += 1) {
                saida2 = saida2 + '*';
            }
        }
        else {
            for (let index2 = 1; index2 <= index1; index2 += 1) {
                if (index2 == 1 || index2 == index1) {
                    saida2 = saida2 + '*';
                }
                else {
                    saida2 = saida2 + ' ';
                }
            }
        }
        for (let index3 = 1; index3 <= ((n5 - saida2.length) / 2); index3 += 1) {
            saida3 = saida3 + " ";
        }
        if (index1 % 2 > 0) {
            ajuste = saida3 + saida2;
            console.log(ajuste);
        }
    }
}
else {
    console.log("O n deve ser maior que 1 e ímpar");
}

//6- Faça um programa que diz se um número definido numa variável é primo ou não.
//Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão 
//dele com quaisquer outros números dá resto diferente de zero.
//Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai 
//precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

let numPrimo = 4;
let contador = 0;

for (let index = 1; index <= numPrimo; index += 1) {
    if (numPrimo % index == 0) {
        contador = contador + 1;
    }
    else {
        contador = contador;
    }
}
if (contador < 3) {
    console.log ("Esse número é primo!");
}
else {
    console.log ("Esse número não é primo!");
}