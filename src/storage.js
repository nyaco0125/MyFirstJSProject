const nameTitle = document.querySelector('.name'),
user = document.querySelector('.js-form'),
input = document.querySelector('input')

function getUserName(){
    const userName = localStorage.getItem('username');
    nameTitle.innerText= `Hello ${userName}!`;
}

function handleSubmit() {
    const currentValue = input.value;
    localStorage.setItem('username',currentValue)
    getUserName();
  }
  
  function askForName() {
    user.addEventListener("submit", handleSubmit);
  }


function init(){
    getUserName()
    askForName()
}

init()