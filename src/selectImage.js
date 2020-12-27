const body = document.querySelector('body');
const numberOne = document.querySelector('.one'),numberTwo = document.querySelector('.two'),numberThree = document.querySelector('.three')


function selectImageOne(){
    body.style.backgroundImage = "url('assets/snow-4682266_1920.jpg')";
}

function addClickEventOne(){
    numberOne.addEventListener('click', selectImageOne)
}
function selectImageTwo(){
    body.style.backgroundImage = "url('assets/winter-3267925_1920.jpg')";
}

function addClickEventTwo(){
    numberTwo.addEventListener('click', selectImageTwo)
}
function selectImageThree(){
    body.style.backgroundImage = "url('assets/fallow-deer-4743238_1920.jpg')";
}

function addClickEventThree(){
    numberThree.addEventListener('click', selectImageThree)
}


function init(){
    addClickEventOne();
    addClickEventTwo();
    addClickEventThree();
}

init()