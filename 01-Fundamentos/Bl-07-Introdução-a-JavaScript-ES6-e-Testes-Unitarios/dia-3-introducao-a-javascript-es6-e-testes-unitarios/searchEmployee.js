const { resourceUsage } = require("process");

const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

const searchEmployee = (id, detail) => {
  let obj = '';
  let result = [];
  for (let index = 0; index < professionalBoard.length; index += 1) {
    if (professionalBoard[index].id === id) {
      obj = Object.entries(professionalBoard[index]);
      for (let index1 = 0; index1 < obj.length; index1 += 1) {
        if (obj[index1][0] === detail) {
          result = obj[index1][1];
        }
      }
    }
  }
  if (obj.length === 0) {
    result = `ID não identificada`;
  } else if (result.length === 0) {
    result = `Informação indisponível`;
  }
  return result;
};

module.exports = searchEmployee;
