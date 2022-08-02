const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function adicionaTurno(objeto, chave, valorChave) {
  objeto[chave] = valorChave;
}
adicionaTurno(lesson2, 'turno', 'noite');

function listarChavesDeObjetos(objeto) {
  Object.keys(objeto);
}

function tamanhoDoObjeto(objeto) {
  Object.keys(objeto).length;
}

function valoresDaChaveDoObjeto(objeto) {
  Object.value(objeto);
}

const allLessons = Object.assign({lesson1, lesson2, lesson3});

console.log(allLessons);

const totalAlunos = () => {
  const sum = Number(lesson1.numeroEstudantes) + Number(lesson2.numeroEstudantes) + Number(lesson3.numeroEstudantes);
  return sum;
}
console.log(totalAlunos());

const valorPeloNumero = (objeto, indice) => {
  const a = Object.values(objeto);
  return a[indice];
}
console.log(valorPeloNumero(lesson1, 0));

const verificaPar = (objeto, chave, valor) => {
  const a = Object.entries(objeto);
  let b = 0;
  let c = 'false';
  for (let index = 0; index < a.length; index += 1) {
    if (a[index].includes(chave) || a[index].includes(valor)) {
      b += 1;
    }
  }
  if (b > 0) {
    c = 'true';
  }
  return c;
}
console.log(verificaPar(lesson1,'materia', 'Matemática'));

const assistiouMatematica = () => {
  let sum = 0;
  const a = [allLessons.lesson1.materia, allLessons.lesson1.numeroEstudantes];
  const b = [allLessons.lesson2.materia, allLessons.lesson2.numeroEstudantes];
  const c = [allLessons.lesson3.materia, allLessons.lesson3.numeroEstudantes];
  
  if (a[0] === 'Matemática') {
    sum = a[1] + sum;
  }
  if (b[0] === 'Matemática') {
    sum = b[1] + sum;
  }
  if (c[0] === 'Matemática') {
    sum = c[1] + sum;
  }
  return sum;
}
console.log(assistiouMatematica());

const professorRelat = (obj, prof) => {
  let a = [Object.entries(obj.lesson1), Object.entries(obj.lesson2), Object.entries(obj.lesson3)];
  let b = [];
  let c = 0;
  
  for (let index = 0; index < 3; index += 1) {
    if (a[index][2][1] === prof) {
      b.push(a[index][0][1]);
      c = Number(a[index][1][1]) + c;
    }
  }

  let d = {
    professor: prof,
    aulas: b,
    estudantes: c,
  }

  return d;
}
console.log(professorRelat(allLessons, 'Carlos'))
