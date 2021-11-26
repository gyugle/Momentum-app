'use strict';
// constants
const userInput = document.querySelector('.username');
const loginBtn = document.querySelector('.loginBtn');
const greeting = document.querySelector('.greeting');
const logoutBtn = document.querySelector('.logoutBtn');
const inputForm = document.querySelector('.inputForm');

const previousUser = localStorage.getItem('username');

// functions

function loginHidden() {}
function getUserName() {
  event.preventDefault();
  localStorage.setItem('username', userInput.value);
  greeting.classList.remove('hidden');
  greeting.innerText = `Hello ${userInput.value}`;
  userInput.classList.add('hidden');
  loginBtn.classList.add('hidden');
  logoutBtn.classList.remove('hidden');
  userInput.value = null;
}

function onClickLogout(event) {
  event.preventDefault();
  localStorage.removeItem('username');
  greeting.classList.add('hidden');
  userInput.classList.remove('hidden');
  loginBtn.classList.remove('hidden');
  logoutBtn.classList.add('hidden');
}

// main
if (localStorage.getItem('username') !== null) {
  greeting.classList.remove('hidden');
  greeting.innerText = `Hello ${previousUser}`;
  userInput.classList.add('hidden');
  loginBtn.classList.add('hidden');
  logoutBtn.classList.remove('hidden');
}

loginBtn.addEventListener('click', getUserName);
inputForm.addEventListener('submit', getUserName);
logoutBtn.addEventListener('click', onClickLogout);
