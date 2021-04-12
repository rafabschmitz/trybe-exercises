function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  
  for (let index = 0; index < weekDays.length; index += 1) {
    let days = weekDays[index];
    let dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
    document.querySelector('.week-days').appendChild(dayListItem);
  }
};
createDaysOfTheWeek();
  
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

//Implemente uma função que crie dinamicamente cada dia do calendário e os adicione como filhos da tag <ul #days>  
function createDaysOfTheMonth() {
  for (let i = 0; i < dezDaysList.length; i += 1) {
    
    let day = document.createElement('li');
    day.innerText = dezDaysList[i];
    if (dezDaysList[i] === 24 | dezDaysList[i] === 31){
      day.classList.add ('day', 'holiday');
    } else if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18){
      day.classList.add ('day', 'friday');
    } else if (dezDaysList[i] === 25){
      day.classList.add ('day', 'holiday', 'friday');
    } else {
      day.classList.add ('day');
    }
    document.querySelector("#days").appendChild(day);
  }
}
createDaysOfTheMonth ();

//Implemente uma função que crie dinamicamente um botão com o nome "Feriados".

function createHolidayButton (Name){
  let newButton = document.createElement('button');
  newButton.innerHTML = Name;
  newButton.id = 'btn-holiday';
  document.querySelector('.buttons-container').appendChild(newButton);
}
createHolidayButton ('Feriados');

//Implemente uma função que dispare um evento que muda a cor de fundo dos dias com a classe "holiday" 
let element = document.querySelector('#btn-holiday');
element.addEventListener('click',function (){
  let holidayItens = document.querySelectorAll('.holiday');
  for(i=0; i<holidayItens.length; i+=1){
    if (holidayItens[i].style.backgroundColor === 'yellowgreen') {
      holidayItens[i].style.backgroundColor = 'rgb(238,238,238)';
    } else {
        holidayItens[i].style.backgroundColor = 'yellowgreen';
    }
  }
});

//Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira".
function createFridayButton (Name){
  let newButton = document.createElement('button');
  newButton.innerHTML = Name;
  newButton.id = 'btn-friday';
  document.querySelector('.buttons-container').appendChild(newButton);
}
createFridayButton ('Sexta-feira')

//Implemente uma função que dispare um evento que insere um sextou nas Sextas-feiras.
var sextas = ["4", "11", "18", "25"];
let element2 = document.querySelector('#btn-friday');
element2.addEventListener('click',function (){
  let fridayItens = document.querySelectorAll('.friday');
  for(i=0; i<fridayItens.length; i+=1){
    if (fridayItens[i].innerText !== 'SEXTOU!'){
      fridayItens[i].innerText = 'SEXTOU!';
    } else {
      fridayItens[i].innerText = sextas[i];
    }
  }
});

// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
let dias = document.querySelector('#days');
dias.addEventListener('mouseover', function (event){
  event.target.style.fontSize = '30px';
});

dias.addEventListener('mouseout', function (event){
  event.target.style.fontSize = '20px';
});

//Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
function newTaskSpan(task) {
  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');
  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
};

newTaskSpan('Projeto:');

//Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task.
function newTaskDiv(color) {

  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask);
};

newTaskDiv('red');

//Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass();

//Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();


//Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  getInputField.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;
      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  })
}

addNewTask();