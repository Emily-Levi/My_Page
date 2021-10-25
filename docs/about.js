window.addEventListener('DOMContentLoaded',init,false);


function changeColor(color) {
    document.body.style.background = color
}

function Light() {
    changeColor('white');
    el_down.innerHTML = "Background Color changed";
}

function Dark() {
    changeColor('black');
    el_down.innerHTML = "Background Color changed";
}



function init(){
    var buttons = document.getElementsByTagName("button");
    buttons[0].addEventListener("click", Light, false)
    buttons[1].addEventListener("click", Dark, false)
}