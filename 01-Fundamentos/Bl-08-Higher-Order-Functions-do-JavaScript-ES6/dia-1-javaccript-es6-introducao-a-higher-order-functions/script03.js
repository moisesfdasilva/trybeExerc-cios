// Bônus
// Parte I - Game Actions Simulator

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// 1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const dragonAttack = () => {
  const newNumber = Math.round(Math.random() * (15 - 0) + 0);
  const result = Number(dragon.strength) + newNumber;
  return result;
};
console.log(dragonAttack());

// 2 - Crie uma função que retorna o dano causado pelo warrior.
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) 
// e o valor de strength * weaponDmg (dano máximo).

const warriorAttack = () => {
  const wStrangth = Number(warrior.strength);
  const wStrWeap = wStrangth * Number(warrior.weaponDmg);
  const result = Math.round(Math.random() * (wStrWeap - wStrangth) + wStrangth);
  return result;
};
console.log(warriorAttack());

// 3 - Crie uma função que retorna um objeto com duas chaves e 
// dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) 
// e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, 
// caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem 
// (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const mageAttack = () => {
  const mIntell = Number(warrior.strength);
  const mIntell2 = mIntell * 2;
  const mAttack = Math.round(Math.random() * (mIntell2 - mIntell) + mIntell);
  let mMana = []
  if (mage.mana > 15) {
    mMana = mage.mana - 15;
    mage.mana = mMana;
  } else {
    mMana = 'Não possui mana suficiente';
  }
  const result = {
    attack: mAttack,
    mana: mMana,
  };
  return result;
};
console.log(mageAttack());

// Parte II
// 1 - Crie a primeira HOF que compõe o objeto gameActions. Ela será a função que simula 
// o turno do personagem warrior. Esta HOF receberá como parâmetro a função que calcula o dano 
// deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. 
// Além disto ela também deve atualizar o valor da chave damage do warrior.

const gameActions = () => {
  dragon.healthPoints = dragon.healthPoints - warriorAttack();
  dragon.healthPoints = dragon.healthPoints - warriorAttack();
  dragon.healthPoints = dragon.healthPoints - warriorAttack();
  return dragon.healthPoints;
};
console.log(gameActions());

// 2 - Crie a segunda HOF que compõe o objeto gameActions. Ela será a função que simula o turno do 
// personagem mage. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo 
// personagem mage e atualizará os healthPoints do monstro dragon. Além disto ela também deve 
// atualizar o valor das chaves damage e mana do mage.

const gameActions1 = () => {
  const mageA = mageAttack();
  dragon.healthPoints = dragon.healthPoints - mageA.attack;
  dragon.healthPoints = dragon.healthPoints - mageA.attack;
  dragon.healthPoints = dragon.healthPoints - mageA.attack;
  const result = {
    dragonHealthPoints: dragon.healthPoints,
    mageMana: mage.mana,
  };
  return result;
};
console.log(gameActions1());

// 3 - Crie a terceira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do 
// monstro dragon. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro 
// dragon e atualizará os healthPoints dos personagens mage e warrior. Além disto ela também deve 
// atualizar o valor da chave damage do monstro.

const gameActions2 = () => {
  mage.healthPoints = mage.healthPoints - dragonAttack();
  mage.healthPoints = mage.healthPoints - dragonAttack();
  warrior.healthPoints = warrior.healthPoints - dragonAttack();
  warrior.healthPoints = warrior.healthPoints - dragonAttack();
  const result = {
    wariorHealthPoints: warrior.healthPoints,
    mageHealthPoints: mage.healthPoints,
  };
  return result;
};
console.log(gameActions2());

// 4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um 
// console.log para visualizar o resultado final do turno.
// JÁ REALIZADO ACIMA!!
