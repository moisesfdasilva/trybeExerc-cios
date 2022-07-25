function sendA(event) {
  event.preventDefault();
}
document.getElementById(`inp-button1`).addEventListener(`click`, sendA);

function clearA() {
  document.getElementById(`inp-text`).value = ``;
  document.getElementById(`inp-email`).value = ``;
  document.getElementById(`inp-radio1`).checked = false;
  document.getElementById(`inp-radio2`).checked = false;
  document.getElementById(`inp-radio3`).checked = false;
  document.getElementById(`inp-radio4`).checked = false;
  document.getElementById(`txt-area`).value = ``;
  document.getElementById(`inp-date`).value = ``;
  document.getElementById(`inp-check1`).checked = false;
  document.getElementById(`inp-check2`).checked = false;
}
document.getElementById(`inp-button2`).addEventListener(`click`, clearA);

document.getElementById(`inp-button1`).disabled = true;

function activeButton() {
  if (document.getElementById(`inp-check2`).checked === true) {
    document.getElementById(`inp-button1`).disabled = false;
  } else {
    document.getElementById(`inp-button1`).disabled = true;
  }
}

document.getElementById(`inp-check2`).addEventListener(`click`, activeButton);
