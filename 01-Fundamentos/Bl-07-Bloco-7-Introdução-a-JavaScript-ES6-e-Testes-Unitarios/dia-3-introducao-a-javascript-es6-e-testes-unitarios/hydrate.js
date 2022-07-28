function hydratePt1(fraseBar) {
  let receba = [];
  let receba2 = [];
  let soma = 0;
  receba = fraseBar.split(' ');
  for (let index in receba) {
    if (Number.isNaN(parseInt(receba[index], 10)) === false) {
      receba2.push(parseInt(receba[index], 10));
    }
  }
  for (let index = 0; index < receba2.length; index += 1) {
    soma += receba2[index];
  }
  return soma;
}

function hydrate(fraseBar) {
  let agua = [];
  if (hydratePt1(fraseBar) < 2) {
    agua = `${hydratePt1(fraseBar)} ${'copo de água'}`;
  } else {
    agua = `${hydratePt1(fraseBar)} ${'copos de água'}`;
  }
  return agua;
}

module.exports = hydrate;