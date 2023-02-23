import { getFromLocalStorage, saveToLocalStorage } from './local-storage.js';

// Adds new TODO item to the list
const addTodo = () => {
  const todos = getFromLocalStorage();
  const newTodoDescription = document.getElementById('todo-input');
  const newTodo = {
    description: newTodoDescription.value,
    completed: false,
    index: todos.length,
  };
  newTodoDescription.value = '';
  todos.push(newTodo);
  saveToLocalStorage(todos);
};

// Updates single TODO item after edit
const updateTodo = (todos, index, value) => {
  todos[index].description = value;

  saveToLocalStorage(todos);
};

// Deletes single TODO from the list
const deleteTodoItem = (todos, index) => {
  const newTodos = todos.filter((todo, innerIndex) => index !== innerIndex);
  for (let i = 0; i < newTodos.length; i += 1) {
    newTodos[i].index = i;
  }
  saveToLocalStorage(newTodos);
};

// Deletes all completed Items in the list
const deleteAllCompleted = (todos) => {
  const newTodos = todos.filter((todo) => todo.completed !== true);
  for (let i = 0; i < newTodos.length; i += 1) {
    newTodos[i].index = i;
  }
  saveToLocalStorage(newTodos);
};

export {
  addTodo,
  saveToLocalStorage,
  getFromLocalStorage,
  deleteTodoItem,
  deleteAllCompleted,
  updateTodo,
};