//SALVA AS MODIFICAÇÕES DO TEXTO:
function saveChanges () {
  const textItens = document.getElementsByClassName(`modify`);
  const classArray = [];
  for (let element = 0; element < textItens.length; element += 1) {
    classArray.push((textItens[element]).className);
  }
  localStorage.setItem(`style`, JSON.stringify(classArray));
}
document.getElementById(`save`).addEventListener(`click`, saveChanges);

//CARREGAM AS MODIFICAÇÕES DO TEXTO:
function modificationLoad() {
  if (localStorage.getItem(`style`) !== null) {
    const classArray = JSON.parse(localStorage.getItem(`style`));    
    for (let index = 0; index < classArray.length; index += 1) {
      document.getElementsByClassName(`modify`)[index].className = classArray[index];
    }
  }
}
window.onload = modificationLoad;

// EVENTO PARA SELECIONAR O ITEM DO BACKGROUNDCOLOR:
const countBack = document.querySelectorAll(`.background-color li`);
const classCalledModify = document.querySelectorAll(`.modify`);

function selectBackColor(action) {
  //Retira a Classe No Segundo Clique:
  if ((action.target.className).includes(`selectBackColor`)) {
    for (let element = 0; element < countBack.length; element += 1) {
      if ((action.target.className).includes(`selectBackColor${element + 1}`)) {
        action.target.className = (action.target.className).replace(` selectBackColor${element + 1}`, ``);
        action.target.style.border = ``;
      }
    }
  //Inclui a Classe:
  } else {
    for (let element = 0; element < countBack.length; element += 1) {
      if (action.target === countBack[element]) {
        action.target.className = `${action.target.className} selectBackColor${element + 1}`;
      }
    }
  }
  //Retira Outra Classe Selecionada Antes:
  for (let index = 0; index < countBack.length; index += 1) {
    if (countBack[index] !== action.target) {
      for (let element = 0; element < countBack.length; element += 1) {
        countBack[index].className = countBack[index].className.replace(` selectBackColor${element + 1}`, ``);
        countBack[index].style.border = ``;
      }
    }
  }
  //Aplica a Borda No Item Selecionado:
  for (let element = 0; element < countBack.length; element += 1) {
    if (document.querySelectorAll(`.background-color .selectBackColor${element + 1}`).length > 0) {
      document.querySelectorAll(`.background-color .selectBackColor${element + 1}`)[0].style.border = `5px pink solid`;
    }
  }
}
//Aplica o Escutador Nos Itens a Serem Selecionados:
for (let element = 0; element < countBack.length; element += 1) {
  countBack[element].addEventListener(`click`, selectBackColor);
}

// EVENTO PARA APLICAR O BACKGROUNDCOLOR NO TEXTO:
function changeBackground(action) {
  let abc = 0;
  for (let element = 0; element < countBack.length; element += 1) {
    if (countBack[element].className.includes(`selectBackColor`)) {
      abc = element + 1;
    }
  }
  if (abc > 0) {
    if (action.target.className.includes(`selectBackColor${abc}`)) {
      action.target.className = action.target.className.replace(` selectBackColor${abc}`, ``);
    } else {
      for (let element = 0; element < countBack.length; element += 1) {
        action.target.className = action.target.className.replace(` selectBackColor${element + 1}`, ``);
      }
      action.target.className = `${action.target.className} selectBackColor${abc}`;
    }
  }
}
//Aplica o Escutador Nos Itens a Serem Modificados:
for (let element = 0; element < classCalledModify.length; element += 1) {
  classCalledModify[element].addEventListener(`click`, changeBackground);
}

// EVENTO PARA SELECIONAR A COR DO TEXTO:
const countTextColor = document.querySelectorAll(`.text-color li`);

function selectTextColor(action) {
  //Retira a Classe No Segundo Clique:
  if ((action.target.className).includes(`selectTextColor`)) {
    for (let element = 0; element < countTextColor.length; element += 1) {
      if ((action.target.className).includes(`selectTextColor${element + 1}`)) {
        action.target.className = (action.target.className).replace(` selectTextColor${element + 1}`, ``);
        action.target.style.border = ``;
      }
    }
  //Inclui a Classe:
  } else {
    for (let element = 0; element < countTextColor.length; element += 1) {
      if (action.target === countTextColor[element]) {
        action.target.className = `${action.target.className} selectTextColor${element + 1}`;
      }
    }
  }
  //Retira Outra Classe Selecionada Antes:
  for (let index = 0; index < countTextColor.length; index += 1) {
    if (countTextColor[index] !== action.target) {
      for (let element = 0; element < countTextColor.length; element += 1) {
        countTextColor[index].className = countTextColor[index].className.replace(` selectTextColor${element + 1}`, ``);
        countTextColor[index].style.border = ``;
      }
    }
  }
  //Aplica a Borda No Item Selecionado:
  for (let element = 0; element < countTextColor.length; element += 1) {
    if (document.querySelectorAll(`.text-color .selectTextColor${element + 1}`).length > 0) {
      document.querySelectorAll(`.text-color .selectTextColor${element + 1}`)[0].style.border = `5px pink solid`;
    }
  }
}
//Aplica o Escutador Nos Itens a Serem Selecionados:
for (let element = 0; element < countTextColor.length; element += 1) {
  countTextColor[element].addEventListener(`click`, selectTextColor);
}

// EVENTO PARA APLICAR A COR NO TEXTO:
function changeTextColor(action) {
  let abc = 0;
  for (let element = 0; element < countTextColor.length; element += 1) {
    if (countTextColor[element].className.includes(`selectTextColor`)) {
      abc = element + 1;
    }
  }
  if (abc > 0) {
    if (action.target.className.includes(`selectTextColor${abc}`)) {
      action.target.className = action.target.className.replace(` selectTextColor${abc}`, ``);
    } else {
      for (let element = 0; element < countTextColor.length; element += 1) {
        action.target.className = action.target.className.replace(` selectTextColor${element + 1}`, ``);
      }
      action.target.className = `${action.target.className} selectTextColor${abc}`;
    }
  }
}
//Aplica o Escutador Nos Itens a Serem Modificados:
for (let element = 0; element < classCalledModify.length; element += 1) {
  classCalledModify[element].addEventListener(`click`, changeTextColor);
}

// EVENTO PARA SELECIONAR O TAMANHO DA FONTE:
const countFontSize = document.querySelectorAll(`.font-size li`);

function selectFontSize(action) {
  //Retira a Classe No Segundo Clique:
  if ((action.target.className).includes(`selectFontSize`)) {
    for (let element = 0; element < countFontSize.length; element += 1) {
      if ((action.target.className).includes(`selectFontSize${element + 1}`)) {
        action.target.className = (action.target.className).replace(` selectFontSize${element + 1}`, ``);
        action.target.style.border = ``;
      }
    }
  //Inclui a Classe:
  } else {
    for (let element = 0; element < countFontSize.length; element += 1) {
      if (action.target === countFontSize[element]) {
        action.target.className = `${action.target.className} selectFontSize${element + 1}`;
      }
    }
  }
  //Retira Outra Classe Selecionada Antes:
  for (let index = 0; index < countFontSize.length; index += 1) {
    if (countFontSize[index] !== action.target) {
      for (let element = 0; element < countFontSize.length; element += 1) {
        countFontSize[index].className = countFontSize[index].className.replace(` selectFontSize${element + 1}`, ``);
        countFontSize[index].style.border = ``;
      }
    }
  }
  //Aplica a Borda No Item Selecionado:
  for (let element = 0; element < countFontSize.length; element += 1) {
    if (document.querySelectorAll(`.font-size .selectFontSize${element + 1}`).length > 0) {
      document.querySelectorAll(`.font-size .selectFontSize${element + 1}`)[0].style.border = `5px pink solid`;
    }
  }
}
//Aplica o Escutador Nos Itens a Serem Selecionados:
for (let element = 0; element < countFontSize.length; element += 1) {
  countFontSize[element].addEventListener(`click`, selectFontSize);
}

// EVENTO PARA APLICAR O TAMANHO DA FONTE NO TEXTO:
function changeFontSize(action) {
  let abc = 0;
  for (let element = 0; element < countFontSize.length; element += 1) {
    if (countFontSize[element].className.includes(`selectFontSize`)) {
      abc = element + 1;
    }
  }
  if (abc > 0) {
    if (action.target.className.includes(`selectFontSize${abc}`)) {
      action.target.className = action.target.className.replace(` selectFontSize${abc}`, ``);
    } else {
      for (let element = 0; element < countFontSize.length; element += 1) {
        action.target.className = action.target.className.replace(` selectFontSize${element + 1}`, ``);
      }
      action.target.className = `${action.target.className} selectFontSize${abc}`;
    }
  }
}
//Aplica o Escutador Nos Itens a Serem Modificados:
for (let element = 0; element < classCalledModify.length; element += 1) {
  classCalledModify[element].addEventListener(`click`, changeFontSize);
}

// EVENTO PARA SELECIONAR A DISTANCIA ENTRE LINHAS:
const countLineHeight = document.querySelectorAll(`.line-height li`);

function selectLineHeight(action) {
  //Retira a Classe No Segundo Clique:
  if ((action.target.className).includes(`selectLineHeight`)) {
    for (let element = 0; element < countLineHeight.length; element += 1) {
      if ((action.target.className).includes(`selectLineHeight${element + 1}`)) {
        action.target.className = (action.target.className).replace(` selectLineHeight${element + 1}`, ``);
        action.target.style.border = ``;
      }
    }
  //Inclui a Classe:
  } else {
    for (let element = 0; element < countLineHeight.length; element += 1) {
      if (action.target === countLineHeight[element]) {
        action.target.className = `${action.target.className} selectLineHeight${element + 1}`;
      }
    }
  }
  //Retira Outra Classe Selecionada Antes:
  for (let index = 0; index < countLineHeight.length; index += 1) {
    if (countLineHeight[index] !== action.target) {
      for (let element = 0; element < countLineHeight.length; element += 1) {
        countLineHeight[index].className = countLineHeight[index].className.replace(` selectLineHeight${element + 1}`, ``);
        countLineHeight[index].style.border = ``;
      }
    }
  }
  //Aplica a Borda No Item Selecionado:
  for (let element = 0; element < countLineHeight.length; element += 1) {
    if (document.querySelectorAll(`.line-height .selectLineHeight${element + 1}`).length > 0) {
      document.querySelectorAll(`.line-height .selectLineHeight${element + 1}`)[0].style.border = `5px pink solid`;
    }
  }
}
//Aplica o Escutador Nos Itens a Serem Selecionados:
for (let element = 0; element < countLineHeight.length; element += 1) {
  countLineHeight[element].addEventListener(`click`, selectLineHeight);
}

// EVENTO PARA APLICAR A DISTANCIA ENTRE LINHAS NO TEXTO:
function changeLineHeight(action) {
  let abc = 0;
  for (let element = 0; element < countLineHeight.length; element += 1) {
    if (countLineHeight[element].className.includes(`selectLineHeight`)) {
      abc = element + 1;
    }
  }
  if (abc > 0) {
    if (action.target.className.includes(`selectLineHeight${abc}`)) {
      action.target.className = action.target.className.replace(` selectLineHeight${abc}`, ``);
    } else {
      for (let element = 0; element < countLineHeight.length; element += 1) {
        action.target.className = action.target.className.replace(` selectLineHeight${element + 1}`, ``);
      }
      action.target.className = `${action.target.className} selectLineHeight${abc}`;
    }
  }
}
//Aplica o Escutador Nos Itens a Serem Modificados:
for (let element = 0; element < classCalledModify.length; element += 1) {
  classCalledModify[element].addEventListener(`click`, changeLineHeight);
}

// EVENTO PARA SELECIONAR O TIPO DA FONTE:
const countFontFamily = document.querySelectorAll(`.font-family li`);

function selectFontFamily(action) {
  //Retira a Classe No Segundo Clique:
  if ((action.target.className).includes(`selectFontFamily`)) {
    for (let element = 0; element < countFontFamily.length; element += 1) {
      if ((action.target.className).includes(`selectFontFamily${element + 1}`)) {
        action.target.className = (action.target.className).replace(` selectFontFamily${element + 1}`, ``);
        action.target.style.border = ``;
      }
    }
  //Inclui a Classe:
  } else {
    for (let element = 0; element < countFontFamily.length; element += 1) {
      if (action.target === countFontFamily[element]) {
        action.target.className = `${action.target.className} selectFontFamily${element + 1}`;
      }
    }
  }
  //Retira Outra Classe Selecionada Antes:
  for (let index = 0; index < countFontFamily.length; index += 1) {
    if (countFontFamily[index] !== action.target) {
      for (let element = 0; element < countFontFamily.length; element += 1) {
        countFontFamily[index].className = countFontFamily[index].className.replace(` selectFontFamily${element + 1}`, ``);
        countFontFamily[index].style.border = ``;
      }
    }
  }
  //Aplica a Borda No Item Selecionado:
  for (let element = 0; element < countFontFamily.length; element += 1) {
    if (document.querySelectorAll(`.font-family .selectFontFamily${element + 1}`).length > 0) {
      document.querySelectorAll(`.font-family .selectFontFamily${element + 1}`)[0].style.border = `5px pink solid`;
    }
  }
}
//Aplica o Escutador Nos Itens a Serem Selecionados:
for (let element = 0; element < countFontFamily.length; element += 1) {
  countFontFamily[element].addEventListener(`click`, selectFontFamily);
}

// EVENTO PARA APLICAR O TIPO DE FONTE NO TEXTO:
function changeFontFamily(action) {
  let abc = 0;
  for (let element = 0; element < countFontFamily.length; element += 1) {
    if (countFontFamily[element].className.includes(`selectFontFamily`)) {
      abc = element + 1;
    }
  }
  if (abc > 0) {
    if (action.target.className.includes(`selectFontFamily${abc}`)) {
      action.target.className = action.target.className.replace(` selectFontFamily${abc}`, ``);
    } else {
      for (let element = 0; element < countFontFamily.length; element += 1) {
        action.target.className = action.target.className.replace(` selectFontFamily${element + 1}`, ``);
      }
      action.target.className = `${action.target.className} selectFontFamily${abc}`;
    }
  }
}
//Aplica o Escutador Nos Itens a Serem Modificados:
for (let element = 0; element < classCalledModify.length; element += 1) {
  classCalledModify[element].addEventListener(`click`, changeFontFamily);
}
