import './style.css';
import {
  addTodo,
  deleteTodoItem,
  deleteAllCompleted,
  updateTodo,
  updateCompleted,
} from './modules/todo.js';

import {
  saveToLocalStorage,
  getFromLocalStorage,
} from './modules/local-storage.js';

const displayTodoList = () => {
  const todos = getFromLocalStorage();
  const todosList = document.getElementById('todos-list');
  todosList.innerHTML = '';
  todos.forEach((todo, index) => {
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';

    const todoItemLeft = document.createElement('div');
    todoItemLeft.className = 'todo-item-left';

    const input = document.createElement('input');
    input.className = 'checkbox';
    input.type = 'checkbox';
    if (todo.completed) {
      input.setAttribute('checked', '');
    }

    input.onchange = (e) => {
      updateCompleted(todos, index, e);
      saveToLocalStorage(todos);
    };

    todoItemLeft.appendChild(input);

    const listItemPara = document.createElement('p');
    listItemPara.classList.add('display-flex');
    if (todo.completed) {
      listItemPara.classList.add('line-through');
    } else {
      listItemPara.classList.remove('line-through');
    }
    listItemPara.innerText = todo.description;
    todoItemLeft.appendChild(listItemPara);

    const editInput = document.createElement('input');
    editInput.className = 'display-none';
    editInput.type = 'text';
    editInput.value = todo.description;
    editInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        todoItem.classList.toggle('bg-focus');
        saveToLocalStorage(updateTodo(todos, index, e.target.value));
        displayTodoList();
      }
    });
    todoItemLeft.appendChild(editInput);

    todoItem.appendChild(todoItemLeft);

    const deleteIcon = document.createElement('span');
    deleteIcon.className = 'display-none';
    deleteIcon.innerHTML = 'delete';
    deleteIcon.addEventListener('click', () => {
      saveToLocalStorage(deleteTodoItem(todos, index));
      displayTodoList();
    });
    todoItem.appendChild(deleteIcon);

    const moreVert = document.createElement('span');
    moreVert.className = 'material-symbols-outlined';
    moreVert.innerHTML = 'more_vert';
    moreVert.addEventListener('click', () => {
      moreVert.className = 'display-none';
      deleteIcon.className = 'material-symbols-outlined';

      listItemPara.className = 'display-none';
      editInput.className = 'display-flex';
      todoItem.classList.toggle('bg-focus');
      editInput.focus();
    });
    todoItem.appendChild(moreVert);
    todosList.appendChild(todoItem);

    const clearList = document.getElementById('clear-list');
    clearList.addEventListener('click', () => {
      saveToLocalStorage(deleteAllCompleted(todos));
      displayTodoList();
    });
  });
};

window.addEventListener('load', () => {
  const addNewTodo = document.getElementById('add-new-todo');
  addNewTodo.addEventListener('click', () => {
    const todos = getFromLocalStorage();
    const newTodoDescription = document.getElementById('todo-input');
    saveToLocalStorage(addTodo(todos, newTodoDescription.value));
    newTodoDescription.value = '';
    displayTodoList();
  });

  const todoInput = document.getElementById('todo-input');
  todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const todos = getFromLocalStorage();
      const newTodoDescription = document.getElementById('todo-input');
      saveToLocalStorage(addTodo(todos, newTodoDescription.value));
      newTodoDescription.value = '';
      displayTodoList();
    }
  });

  displayTodoList();
});
