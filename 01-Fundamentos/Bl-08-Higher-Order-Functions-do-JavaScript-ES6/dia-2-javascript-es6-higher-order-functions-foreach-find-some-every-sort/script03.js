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

// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

function authorBornIn1947() {
  const a = books.find((element) => (element.author.birthYear = 1947));
  return a;
}
console.log(authorBornIn1947());

// 2 - Retorne o nome do livro de menor nome.

function smallerName() {
  const a = [];
  books.forEach((element) => {
    a.push(element.name);
  });
  a.sort((a, b) => a.length - b.length); 
  const nameBook = a[0];
  return nameBook;
}
console.log(smallerName());

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

function getNamedBook() {
  const a = books.find((object) => (object.name.length === 26));
  return a;
}
console.log(getNamedBook());

// 4 - Ordene os livros por data de lançamento em ordem decrescente.

function booksOrderedByReleaseYearDesc() {
  books.sort((a, b) => (a.releaseYear - b.releaseYear));
  return books;
}
console.log(booksOrderedByReleaseYearDesc());

// 5 - Faça uma função que retorne true, se todas as pessoas autoras 
// nasceram no século XX, ou false, caso contrário.

function everyoneWasBornOnSecXX() {
  const a = books.every((object) => (object.author.birthYear >= 1901 && object.author.birthYear <= 2000));
  return a;
}
console.log(everyoneWasBornOnSecXX());

// 6 - Faça uma função que retorne true, se algum livro foi lançado na 
// década de 80, e false, caso contrário.

function someBookWasReleaseOnThe80s() {
  const a = books.some((object) => (object.releaseYear >= 1980 && object.releaseYear < 1990));
  return a;
}
console.log(someBookWasReleaseOnThe80s());

// 7 - Faça uma função que retorne true, caso nenhum author tenha nascido 
// no mesmo ano, e false, caso contrário.

function thereIsntTheSameBirthYear() {
  const a = [];
  const b = [];
  books.forEach((element) => {
    a.push({ name: element.author.name, birthYear: element.author.birthYear });
  });
  a.forEach((element) => {
    const c = books.find((object) => (object.author.name !== element.name && object.author.birthYear === element.birthYear));
    b.push(c);
  })
  return b.every((element) => (typeof element === 'undefined'));
}
console.log(thereIsntTheSameBirthYear());
