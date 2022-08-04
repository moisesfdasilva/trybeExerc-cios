const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
// NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

function firstExercise() {
  const result = books.map((element) => `${element.name} - ${element.genre} - ${element.author.name}`);

  return result;
}
console.log(firstExercise());

// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade 
// author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando 
// o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais 
// velha considerando suas idades quando o livro foi lançado.

// author, com o nome da pessoa autora do livro
// age, com a idade dessa pessoa quando o livro foi lançado

function secondExercise() {
  const result = books.map((element) => ({ author: (element.author.name), age: (element.releaseYear - element.author.birthYear) }));
  result.sort((a, b) => a.age - b.age);

  return result;
}
console.log(secondExercise());

// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

function thirdExercise() {
  const result = books.filter((element) => (element.genre === 'Ficção Científica' || element.genre === 'Fantasia'));

  return result;
}
console.log(thirdExercise());

// 4 - Crie um array formado pelos livros com mais de 60 anos desde sua publicação. 
// Esse array deve ser ordenado do livro mais velho ao mais novo.

function fourthExercise() {
  const result = books.filter((element) => ((2022 - element.releaseYear) > 60));
  result.sort((a, b) => b.releaseYear - a.releaseYear);

  return result;
}
console.log(fourthExercise());

// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas 
// autoras de ficção científica ou fantasia.

function fifthExercise() {
  const a = books.filter((element) => (element.genre === 'Ficção Científica' || element.genre === 'Fantasia'));
  const result = a.map((element) => (element.name));
  result.sort();

  return result;
}
console.log(fifthExercise());

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

function sixthExercise() {
  const a = books.filter((element) => ((2022 - element.releaseYear) > 60));
  const result = a.map((element) => (element.name));
  result.sort();

  return result;
}
console.log(sixthExercise());

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

function seventhExercise() {
  const a = books.filter((element) => ((element.author.name.slice(0, 9).replace(/ /g, '')).length === 6));
  const result = a.map((element) => (element.name));

  return result;
}
console.log(seventhExercise());
