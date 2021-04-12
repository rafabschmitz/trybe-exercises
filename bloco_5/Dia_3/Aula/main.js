const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

//Crie uma função que adicione a classe 'tech' a div selecionada e
//mantenha um único elemento com a classe 'tech';
function selectThis(e) {
    document.getElementsByClassName('tech')[0].classList.remove('tech');
    e.target.classList.add('tech');
}

divUm.addEventListener('click', selectThis);
divDois.addEventListener('click', selectThis);
divTres.addEventListener('click', selectThis);

//Crie uma função que, ao digitar na caixa de texto, insira a classe 'tech'
//ao elemento de texto;
input.addEventListener('input', function (event){
    document.getElementsByClassName('tech')[0].innerText = event.target.value;
});

//Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', 
//redirecione para seu portifólio.
myWebpage.addEventListener('dblclick', function (){
    location.assign('https://rafabschmitz.github.io/Portfolio');
});

//Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
//a cor do mesmo;
myWebpage.addEventListener('mouseover', function (event){
    event.target.style.color = 'red';
});

//Crie uma função que, ao clicar duas vezes em uma div, resete o texto.
function resetText(event) {
  event.target.innerText = 'Opção reiniciada';
}

divUm.addEventListener('dblclick', resetText);
divDois.addEventListener('dblclick', resetText);
divTres.addEventListener('dblclick', resetText);