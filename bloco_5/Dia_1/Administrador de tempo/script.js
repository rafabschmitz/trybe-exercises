var header = document.querySelector("#header-container");
header.style.backgroundColor = "#11a36a";

var footer = document.querySelector("#footer-container");
footer.style.backgroundColor = "#036b52";

var left = document.querySelector(".emergency-tasks");
left.style.backgroundColor = "pink";

var right = document.querySelector(".no-emergency-tasks");
right.style.backgroundColor = "rgb(255, 255, 126)";

var tarja = document.querySelectorAll("h3");
for (let i=0; i<tarja.length; i+=1){
    if(i<=1){
        tarja[i].style.backgroundColor = "magenta";
    }
    else{
        tarja[i].style.backgroundColor = "black";
    }
}

var paragraphs = document.querySelectorAll(".estiloParagrafo");
paragraphs[0].style.color = "blue";
