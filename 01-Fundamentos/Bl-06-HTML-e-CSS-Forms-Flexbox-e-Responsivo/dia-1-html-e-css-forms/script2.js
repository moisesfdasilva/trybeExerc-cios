// SELETORES
const inputText = document.querySelector(`#input-text`);
const inputCheckbox = document.querySelector(`#input-checkbox`);
const hrefLink = document.querySelector(`#href`);

function linkA(event) {
  event.preventDefault();
}
hrefLink.addEventListener(`click`, linkA);

function linkB(event) {
  event.preventDefault();
}
inputCheckbox.addEventListener(`click`, linkB);

function linkC(event) {
  event.preventDefault();
}
inputText.addEventListener(`keypress`, linkC);