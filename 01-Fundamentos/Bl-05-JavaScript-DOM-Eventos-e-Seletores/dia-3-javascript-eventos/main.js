const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

for (let element = 0; element < document.querySelectorAll('.container li').length; element += 1) {
    document.querySelectorAll('.container li')[element].addEventListener('click', clickList);
}

function clickList (action) {
    if (document.querySelectorAll('.container li')[0] === action.target) {
        document.querySelectorAll('.container li')[0].className = 'tech';
        document.querySelectorAll('.container li')[1].className = '';
        document.querySelectorAll('.container li')[2].className = '';
    } else if (document.querySelectorAll('.container li')[1] === action.target) {
        document.querySelectorAll('.container li')[0].className = '';
        document.querySelectorAll('.container li')[1].className = 'tech';
        document.querySelectorAll('.container li')[2].className = '';
    } else {
        document.querySelectorAll('.container li')[0].className = '';
        document.querySelectorAll('.container li')[1].className = '';
        document.querySelectorAll('.container li')[2].className = 'tech';
    };
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

document.querySelector('#input').addEventListener('change', textWritten);

function textWritten () {
    document.querySelector('#input').placeholder = input.value;
    let receiveText = document.querySelector('#input').placeholder
    document.getElementsByClassName('tech')[0].innerText = receiveText;
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

document.querySelectorAll('header h1')[0].addEventListener('dblclick', myGitHub);

function myGitHub () {
    window.open('https://github.com/moisesfdasilva');
}

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

for (let element = 0; element < document.querySelectorAll('.container li').length; element += 1) {
    document.querySelectorAll('.container li')[element].addEventListener('mouseover', mouseOver);
}

function mouseOver (action2) {
    action2.target.style.backgroundColor = 'yellow';
}

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.

// REALIZAR OS EXERCÍCIOS 5.3