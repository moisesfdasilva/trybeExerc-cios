//SWITCH e CASE

let condicao = ['aprovada', 'lista', 'reprovada', 'não se aplica'];
let nota = 'regular';

switch(nota){
    case 'suficiente':
    case 'boa':
    case 'ótima':
        console.log(condicao[0]);
        break;
    case 'regular':
        console.log(condicao[1]);
        break;
    case 'ruim':
    case 'péssimo':
        console.log(condicao[2]);
        break;
    default:
        console.log(condicao[3]);
}