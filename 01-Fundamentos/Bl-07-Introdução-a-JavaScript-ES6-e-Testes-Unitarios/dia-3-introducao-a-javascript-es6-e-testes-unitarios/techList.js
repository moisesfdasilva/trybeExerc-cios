function techList(tecnologia, nome) {
  let listaDeObjetos = [];
  tecnologia = tecnologia.sort();
  if (tecnologia.length > 0) {
    for (let index = 0; index < tecnologia.length; index += 1) {
      listaDeObjetos.push({ tech: tecnologia[index], name: nome });
    }
  } else {
    listaDeObjetos = 'Vazio!';
  }
  return listaDeObjetos;
}

module.exports = techList;
