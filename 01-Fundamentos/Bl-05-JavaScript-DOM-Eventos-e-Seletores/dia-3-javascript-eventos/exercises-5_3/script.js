function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function createDays() {
  const daysList = document.querySelector('#days');
  
  for (let index = 29; index < 31; index += 1) {
    let days = document.createElement('li');
    days.innerText = index;

    daysList.appendChild(days);
  }

  for (let index = 1; index <= 31; index += 1) {
    let days = document.createElement('li');
    days.innerText = index;
    days.className = 'day';
    if(index === 24 || index === 25 ||index === 31) {
      days.className = `${days.className} holiday`;
    }
    if(index === 4 || index === 11 || index === 18 || index === 25) {
      days.className = `${days.className} friday`;
    }
    daysList.appendChild(days);
  }
}

createDays();

function createButtonHoliday() {
  let holiday = document.createElement('button');
  holiday.innerText = 'Feriados';
  holiday.id = 'btn-holiday';
  document.querySelector('.buttons-container').appendChild(holiday);
}

createButtonHoliday();

function changeHolidayColor() {
  const count = document.querySelectorAll('#days li');
  for (let index = 0; index < count.length; index += 1) {
    if(count[index].className.includes('holiday')) {
      if (count[index].style.backgroundColor === 'greenyellow') {
        count[index].style.backgroundColor = 'rgb(238,238,238)';
      } else {
        count[index].style.backgroundColor = 'greenyellow';
      }
    }
  }
}

document.getElementById('btn-holiday').addEventListener('click', changeHolidayColor);

function createButtonFriday() {
  let holiday = document.createElement('button');
  holiday.innerText = 'Sexta-feira';
  holiday.id = 'btn-friday';
  document.querySelector('.buttons-container').appendChild(holiday);
}

createButtonFriday();

function changeFridayText() {
  const count = document.querySelectorAll('#days li');
  for (let index = 0; index < count.length; index += 1) {
    if(count[index].className.includes('friday')) {
      if (count[index].innerText.includes('É Sexta!')) {
        count[index].innerText = parseInt(count[index - 1].innerText) + 1;
      } else {
        count[index].innerText = 'É Sexta!';
      }
    }
  }
}

document.getElementById('btn-friday').addEventListener('click', changeFridayText);

function changeHeightDayText (action) {
  const event = action.target;
  event.style.fontSize = '40px';
  
}
function backHeightDayText (action) {
  const event = action.target;
  event.style.fontSize = '20px';
}

const daysList = document.querySelectorAll('#days li');

for (let index = 0; index < daysList.length; index += 1) {
  daysList[index].addEventListener('mouseover', changeHeightDayText);
  daysList[index].addEventListener('mouseout', backHeightDayText);
}

function myTasks() {
  const task = document.createElement('span');
  task.innerText = 'Cozinhar';
  document.querySelector('.my-tasks').appendChild(task);
}

myTasks();

function myColor(cor) {
  const color = document.createElement('div');
  color.style.backgroundColor = cor;
  color.className = 'task';
  document.querySelector('.my-tasks').appendChild(color);
}

myColor('pink');

function colorSelect(action) {
  const event = action.target;
  if(event.className.includes('selected')) {
    event.className = 'task';
  } else {
    event.className = 'task selected';
  }
}

for (let index = 0; index < document.querySelectorAll('.my-tasks div').length; index += 1) {
  document.querySelectorAll('.my-tasks div')[index].addEventListener('click', colorSelect);
}

function taskColor(action) {
  const event = action.target;
  if(document.querySelectorAll('.my-tasks div')[0].className.includes = 'selected') {
    if (event.style.color === 'pink') {
      event.style.color = 'rgb(119,119,119)';
    } else {
      event.style.color = 'pink';
    }
  }
}

for (let index = 0; index < document.querySelectorAll('#days li').length; index += 1) {
  document.querySelectorAll('#days li')[index].addEventListener('click', taskColor);
}

function taskInput () {
  const newTask = document.createElement('p');
  if(document.getElementById('task-input').value === ''){
    alert('Vazio');
  } else {
    newTask.innerText = document.getElementById('task-input').value;
    document.querySelector('.input-container').appendChild(newTask);
  }
  
  document.getElementById('task-input').value = '';
}

document.getElementById('btn-add').addEventListener('click', taskInput);
document.getElementById('task-input').addEventListener('change', taskInput);
