//1.Faça cinco programas, um para cada operação aritmética básica.
//Seu programa deve ter duas constantes, a e b, 
//definidas no começo com os valores que serão operados.
//Faça programas para:
//    Adição (a + b)
//    Subtração (a - b)
//    Multiplicação (a * b)
//    Divisão (a / b)
//    Módulo (a % b)

let a = 12;
let b = 2;

console.log("Soma de a e b:", a + b);
console.log("Subtração de a por b:", a - b);
console.log("Multiplicação de a e b:", a * b);
console.log("Divisão de a por b:", a / b);
console.log("Módulo de a por b:", a % b);

//2.Faça um programa que retorne o maior de dois números. Defina no 
//começo do programa duas constantes com os valores que serão comparados.

let a1 = 112;
let b1 = 13;

if (a1 > b1) {
    console.log(a1);
}
else if (a1 < b1) {
    console.log(b1);
}
else {
    console.log("valores iguais");
}

//3.Faça um programa que retorne o maior de três números. 
//Defina no começo do programa três constantes com os valores 
//que serão comparados.

let a2 = 313;
let b2 = 13;
let c2 = 133;

if ((a2 > b2) && (a2 > c2)) {
    console.log(a2);
}
else if ((a2 > b2) && (a2 < c2)) {
    console.log(c2);
}
else if ((b2 > a2) && (b2 > c2)) {
    console.log(b2);
}
else if ((b2 > a2) && (b2 < c2)) {
    console.log(c2);
}
else if ((c2 > a2) && (c2 > b2)) {
    console.log(c2);
}
else if ((c2 > a2) && (c2 < b2)) {
    console.log(b2);
}
else {
    console.log("há valores iguais");
}
//Posso resolver jogando no array e organizando do maior pro 
//menor e pegar o primeiro elemento.

//4.Faça um programa que, dado um valor definido numa constante, 
//retorne "positive" se esse valor for positivo, "negative" se 
//for negativo e "zero" caso contrário.

let a3 = 0;

if (a3 > 0) {
    console.log("positive");
}
else if (a3 < 0) {
    console.log("negative");
}
else {
    console.log("zero");
}

//5.Faça um programa que defina três constantes com os valores 
//dos três ângulos internos de um triângulo. Retorne true se os 
//ângulos representarem os ângulos de um triângulo e false, caso 
//contrário. Se algum ângulo for inválido o programa deve retornar 
//uma mensagem de erro.

let a4 = 60;
let b4 = 60;
let c4 = -180;

if ((a4 + b4 + c4) === 180) {
    console.log("True")
}
else if (a4 <= 0 || b4 <= 0 || c4 <= 0) {
    console.log("Erro, o ângulo não é positio!")
}
else {
    console.log("False")
}

//6. Escreva um programa que receba o nome de uma peça de xadrez 
//e retorne os movimentos que ela faz.

pecaDeXadrez = ['peão', 'torre', 'bispo', 'cavalo', 'rainha', 'rei'];
movimento = ['frente', 'frente, trás e lado', 'diagonal', 'L', 'diagonal, frente, trás e lado', 'qualquer direção'];

let peca = 'RAINHA';

if (peca.toLowerCase() === pecaDeXadrez[0]) {
    console.log(movimento[0])
}
else if (peca.toLowerCase() === pecaDeXadrez[1]) {
    console.log(movimento[1])
}
else if (peca.toLowerCase() === pecaDeXadrez[2]) {
    console.log(movimento[2])
}
else if (peca.toLowerCase() === pecaDeXadrez[3]) {
    console.log(movimento[3])
}
else if (peca.toLowerCase() === pecaDeXadrez[4]) {
    console.log(movimento[4])
}
else if (peca.toLowerCase() === pecaDeXadrez[5]) {
    console.log(movimento[5])
}
else{
    console.log("Escreva o nome de uma peça de xadrez")
}

//7. Escreva um programa que converte uma nota dada em 
// porcentagem (de 0 a 100) em conceitos de A a F. Siga essas 
// regras:

let porcentagem = 89;

if (porcentagem >= 90 && porcentagem <=100) {
    console.log("Nota A")
}
else if (porcentagem >= 80 && porcentagem <90) {
    console.log("Nota B")
}
else if (porcentagem >= 70 && porcentagem <80) {
    console.log("Nota C")
}
else if (porcentagem >= 60 && porcentagem <70) {
    console.log("Nota D")
}
else if (porcentagem >= 50 && porcentagem <60) {
    console.log("Nota E")
}
else if (porcentagem >= 0 && porcentagem <50) {
    console.log("Nota F")
}
else{
    console.log("Erro nota menor que zero ou maior que 100!")
}

//8. Escreva um programa que defina três números em constantes 
//e retorne true se pelo menos uma das três for par. Caso 
//contrário, ele retorna false. Bonus: use somente um if.

let a5 = 1;
let b5 = 81;
let c5 = 123;

if ((a5 % 2 == 0) || (b5 % 2 == 0) || (c5 % 2 == 0)) {
    console.log("true")
}
else {
    console.log("false")
}

//9. Escreva um programa que defina três números em constantes e 
//retorne true se pelo menos uma das três for ímpar. Caso 
//contrário, ele retorna false.

let a6 = 2;
let b6 = 84;
let c6 = 12;

if ((a6 % 2 > 0) || (b6 % 2 > 0) || (c6 % 2 > 0)) {
    console.log("true")
}
else {
    console.log("false")
}

//10. Escreva um programa que se inicie com dois valores em 
//duas constantes diferentes: o custo de um produto e seu 
//valor de venda. A partir dos valores, calcule quanto de 
//lucro (valor de venda descontado o custo do produto) a 
//empresa terá ao vender mil desses produtos.

let valorCusto = 5;
let valorVenda = 8;

if (valorCusto < 0 || valorVenda <0){
    console.log ("Erro, os valores de entrada são menores que zero!");
}
else{
    console.log (valorVenda - (valorCusto + (valorCusto*0.2)));
}

//11. Escreva um programa que se inicie com dois valores em 
//duas constantes diferentes: o custo de um produto e seu 

let salarioBruto = 3000;

if (salarioBruto <= 1556.94) {
    salarioSemInss = salarioBruto - (salarioBruto * 0.08)
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioSemInss = salarioBruto - (salarioBruto * 0.09)
}
else if (salarioBruto >= 2594.93 && salarioBruto <=5189.82) {
    salarioSemInss = salarioBruto - (salarioBruto * 0.11)
}
else{
    salarioSemInss = salarioBruto - 570.88
}

if (salarioSemInss <= 1903.98) {
    salarioLiquido = salarioSemInss
}
else if (salarioSemInss >= 1903.99 && salarioSemInss <= 2826.65) {
    salarioLiquido = salarioSemInss - (salarioSemInss * 0.075 - 142.8)
}
else if (salarioSemInss >= 2826.66 && salarioSemInss <= 3751.05) {
    salarioLiquido = salarioSemInss - (salarioSemInss * 0.15 - 354.8)
}
else if (salarioSemInss >= 3751.06 && salarioSemInss <= 4664.68) {
    salarioLiquido = salarioSemInss - (salarioSemInss * 0.225 - 636.13)
}
else if (salarioSemInss > 4664.68) {
    salarioLiquido = salarioSemInss - (salarioSemInss * 0.275 - 869.36)
}

console.log(salarioLiquido)