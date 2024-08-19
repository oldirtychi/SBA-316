//caching elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

// event listeners for form submissions
todoForm.addEventListener('submit', addTodo);
todoList.addEventListener('click', toggleComplete);

//displays a new task on the list
function addTodo(event) {
    event.preventDefault();

    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.textContent = todoInput.value;

    todoList.appendChild(newTodo);

    todoInput.value = '';
}


function toggleComplete(event) {
    if(event.target.classList.contains('todo-item')){
        event.target.classList.toggle('completed');
    }
}

function creatTodoTemplate(content) {
    const fragment = document.createDocumentFragment();
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item')
    newTodo.text = content;
    fragment.appendChild(ToDo)
    return fragment;
}

function highlightInput() {
    todoInput.classList.add('highlight');
}

function removeHighlight () {
    todoInput.classList.remove('highlight');
}

todoInput.addEventListener('focus', highlightInput);
todoInput.addEventListener('blur', removeHighlight);

function disableButton() {
    const button = todoForm.querySelector('button');
    button.disabled = true;
}

function enableButton() {
    const button = todoForm.querySelector('button');
    button.disabled = false;
}

todoInput.addEventListener('input', enableButton);

console.log('current URL:', window.location.href);
console.log('Browser language:', navigator.language);

todoForm.addEventListener('submit', function(event) {
    if (todoInput.value.trim () === '') {
        alert('Cannot be Blank!');
        event.preventDefault();
    }
  }
 );