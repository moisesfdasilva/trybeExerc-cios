//1. Obtenha o valor "Serviços" do array menu:

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//2. Procure o índice do valor "Portfólio" do array menu: 

let indexOfPortfolio = menu[2];

console.log(indexOfPortfolio);

// .length para saber o tamanho do array.
// .push() adiciona no final e .unshift() no início.
// .pop() remove o último item .shift() o primeiro.
// indexOf() procura o item do array.

//3. Adicione o valor "Contato" no final do array menu: 

menu.push('Contato');

console.log(menu);