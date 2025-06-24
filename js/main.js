var signUp = document.querySelector('.item span');
var inputNameGroup = document.querySelector('#name-group');
var inputName = document.querySelector('#name');
var inputEmail = document.querySelector('#email');
var inputpass = document.querySelector('#pass');
var signupBtn = document.querySelector('#sign-btn');
var loginBtn = document.querySelector('#login');
var span1 = document.querySelector('.span1');
var span2 = document.querySelector('.span2');
var item = document.querySelector('.item');
var item2 = document.querySelector('.item2');
var span3 = document.querySelector('.span3');
var nav = document.querySelector('#nav');
var logoutBtn= document.querySelector('#logout')





var containerData = [];

signupBtn.addEventListener('click', function () {
  var data = {
    name: inputName.value,
    email: inputEmail.value,
    pass: inputpass.value,
  };

  containerData.push(data);
  localStorage.setItem('data', JSON.stringify(containerData));

  inputNameGroup.classList.replace('d-flex', 'd-none');
  signupBtn.classList.replace('d-block', 'd-none');
  loginBtn.classList.replace('d-none', 'd-block');
});

loginBtn.addEventListener('click', function () {
  var savedData = JSON.parse(localStorage.getItem('data')) || [];

  if (savedData.length === 0) {
    alert("No registered users found. Please sign up first.");
    return;
  }

  var enteredEmail = inputEmail.value;
  var enteredPass = inputpass.value;

  var matchedUser = savedData.find(function (user) {
    return user.email === enteredEmail && user.pass === enteredPass;
  });

  if (matchedUser) {
    item.classList.add('d-none');
    item2.classList.remove('d-none');
nav.classList.remove('d-none')
    span3.innerText = matchedUser.name;
  } else {
    alert("Email or password is incorrect. Please try again.");
  }
});

signUp.addEventListener('click', function () {
  inputNameGroup.classList.replace('d-none', 'd-flex');
  loginBtn.classList.replace('d-block', 'd-none');
  signupBtn.classList.replace('d-none', 'd-block');
  span1.classList.replace('d-block', 'd-none');
  span2.classList.replace('d-none', 'd-block');
});

span2.addEventListener('click', function () {
  inputNameGroup.classList.replace('d-flex', 'd-none');
  loginBtn.classList.replace('d-none', 'd-block');
  signupBtn.classList.replace('d-block', 'd-none');
  span1.classList.replace('d-none', 'd-block');
  span2.classList.replace('d-block', 'd-none');
});


logoutBtn.addEventListener('click',function(){
    item.classList.replace('d-none','d-block'),
    item2.classList.add('d-none'),
    nav.classList.add('d-none')
})