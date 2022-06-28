//Pegue cada um dos exercícios de 1 a 5 do final do dia 4.1 e faça com que todos eles sejam funções de um 
//mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas 
//em parâmetros das funções.

//1.Faça cinco programas, um para cada operação aritmética básica.
//Seu programa deve ter duas constantes, a e b, 
//definidas no começo com os valores que serão operados.
//Faça programas para:
//    Adição (a + b)
//    Subtração (a - b)
//    Multiplicação (a * b)
//    Divisão (a / b)
//    Módulo (a % b)

function operacoesMatematicas(a, b) {
    return 'Soma: ' + (a + b) + '; Subtração: ' + (a - b) + '; Multiplicação: ' + 
    (a * b) + '; Divisão: ' + (a / b) + '; e Módulo: ' + (a % b) + '.';
}

console.log(operacoesMatematicas(12, 6));

//2.Faça um programa que retorne o maior de dois números. Defina no 
//começo do programa duas constantes com os valores que serão comparados.

function maiorDosNumeros (a1, b1) {
    if (a1 > b1) {
        return 'o maior valor é: ' + a1 + '.';
    }
    else if (a1 < b1) {
        return 'o maior valor é: ' + b1 + '.';
    }
    else {
        return 'valores iguais.';
    }
}

console.log(maiorDosNumeros(12, 13));

//3.Faça um programa que retorne o maior de três números. 
//Defina no começo do programa três constantes com os valores 
//que serão comparados.

function maiorDeTresValores (a2, b2, c2) {
    if ((a2 > b2) && (a2 > c2)) {
        return 'o maior valor é: ' + a2 + '.';
    }
    else if ((a2 > b2) && (a2 < c2)) {
        return 'o maior valor é: ' + c2 + '.';
    }
    else if ((b2 > a2) && (b2 > c2)) {
        return 'o maior valor é: ' + b2 + '.';
    }
    else if ((b2 > a2) && (b2 < c2)) {
        return 'o maior valor é: ' + c2 + '.';
    }
    else if ((c2 > a2) && (c2 > b2)) {
        return 'o maior valor é: ' + c2 + '.';
    }
    else if ((c2 > a2) && (c2 < b2)) {
        return 'o maior valor é: ' + b2 + '.';
    }
    else {
        return "há valores iguais";
    }
}
console.log(maiorDeTresValores(33, 13, 133));

//4.Faça um programa que, dado um valor definido numa constante, 
//retorne "positive" se esse valor for positivo, "negative" se 
//for negativo e "zero" caso contrário.

function posiNeg (a3) {
    if (a3 > 0) {
        return 'positive.';
    }
    else if (a3 < 0) {
        return 'negative.';
    }
    else {
        return 'zero.';
    }
}

console.log(posiNeg(-2));

//5.Faça um programa que defina três constantes com os valores 
//dos três ângulos internos de um triângulo. Retorne true se os 
//ângulos representarem os ângulos de um triângulo e false, caso 
//contrário. Se algum ângulo for inválido o programa deve retornar 
//uma mensagem de erro.

function angDoTriangulo (a4, b4, c4) {
    if ((a4 + b4 + c4) === 180) {
        return 'True!';
    }
    else if (a4 <= 0 || b4 <= 0 || c4 <= 0) {
        return 'Erro, o ângulo não é positio!';
    }
    else {
        return 'False!';
    }
}

console.log(angDoTriangulo(60, 60, 60));