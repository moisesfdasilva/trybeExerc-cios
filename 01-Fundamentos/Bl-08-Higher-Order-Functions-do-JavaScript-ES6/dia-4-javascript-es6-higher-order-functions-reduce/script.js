// 1 - Dada uma matriz, transforme em um array.
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  const result = arrays.reduce((acc, curr) => { 
    acc.push(curr.find((index) => (index !== '')));
    return acc;
  });
  return result;
}
console.log(flatten());

// Para os exercícios 2, 3 e 4 considere o seguinte array:
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

// Adicione o código do exercício aqui:

// 2 - Crie uma string com os nomes de todas as pessoas autoras.
// const expectedResult1 = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  a = books.reduce((acc, curr, index) => {
    if (index === 1) {
      acc = `${acc.author.name}, ${curr.author.name}`;
    } else {
      acc = `${acc}, ${curr.author.name}`;
    }
    return acc;
  });
  return a;
}
console.log(reduceNames());

// 3- Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
// const expectedResult2 = 43;

function averageAge() {
  a = books.reduce((acc, curr, index) => {
    if (index === 1) {
      acc = (acc.releaseYear - acc.author.birthYear) + (curr.releaseYear - curr.author.birthYear);
    } else {
      acc = acc + (curr.releaseYear - curr.author.birthYear);
    }
    return acc;
  });
  return (a / books.length);
}
console.log(averageAge());

// 4- Encontre o livro com o maior nome.
// const expectedResult = {
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   genre: 'Fantasia',
//   author: {
//     name: 'George R. R. Martin',
//     birthYear: 1948,
//   },
//   releaseYear: 1991,
// };

function longestNamedBook() {
  a = books.reduce((acc, curr) => {
    if (acc.name.length > curr.name.length) {
      acc = acc;
    } else {
      acc = curr;
    }
    return acc;
  });
  return a;
}
console.log(longestNamedBook());

// 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const aa = [];
  const newArray = names.map(element => element.split(''));
  newArray.forEach((element1) => {
    element1.forEach((element2) => {
      if (element2.toLowerCase() === 'a') { aa.push(element2) };
    });
  });
  const result = aa.reduce((acc, curr, index) => (index + 1));
  return result;
}
console.log(containsA());

// 6.**- Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o 
// formato { name: nome do aluno, average: media das notas }. Para isso vamos assumir que a posição 0 de notas 
// refere-se ao aluno na posição 0 de alunos, aqui além de reduce será necessário utilizar também a função map. 
// Dica: Você pode acessar o index do array dentro de map, e você pode ver o objeto esperado na constante expected.

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const sumGrades = grades.map((element) => element.reduce((acc, curr) => (acc + curr)));
  const result = [];
  for(let index = 0; index < students.length; index += 1) {
    result.push({ name: students[index], average: sumGrades[index] / grades[index].length });
  }
  return result;
}
console.log(studentAverage());

// const expected = [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];
