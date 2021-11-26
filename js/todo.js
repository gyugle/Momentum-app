'use strict';

// Constants
const todolist = document.querySelector('.todolist');
const inputTodo = document.querySelector('.inputTodo');
const todoBtn = document.querySelector('.todoBtn');
let todosContainer = [];

// Functions
function removeTodo() {
  event.preventDefault;
  const done = event.target.parentElement;
  todosContainer = todosContainer.filter(
    (element) => element.key !== parseInt(done.id)
  );
  localStorage.setItem('todos', JSON.stringify(todosContainer));
  console.log(todosContainer);
  done.remove();
}
function makeHTML(todoObj) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const btn = document.createElement('button');
  li.appendChild(span);
  span.innerText = todoObj.task;
  li.appendChild(btn);
  btn.innerText = '❌';
  btn.addEventListener('click', (todoObj) => removeTodo(todoObj));
  li.id = todoObj.key;
  todolist.appendChild(li);
  inputTodo.value = null;
}
function saveTodo(todoObj) {
  todosContainer.push(todoObj);
  localStorage.setItem('todos', JSON.stringify(todosContainer));
}
function addTodo() {
  event.preventDefault();
  const todoObj = { task: inputTodo.value, key: Date.now() };

  saveTodo(todoObj);
  makeHTML(todoObj);
}

// Main
if (localStorage.getItem('todos') !== null) {
  todosContainer = JSON.parse(localStorage.getItem('todos'));
  todosContainer.forEach(makeHTML);
}
todoBtn.addEventListener('click', addTodo);
inputTodo.addEventListener('submit', addTodo);
