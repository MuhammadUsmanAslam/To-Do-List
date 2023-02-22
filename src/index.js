import './style.css';

const todos = [
  {
    description: 'Go for grocery Shopping',
    completed: false,
    index: 0,
  },
  {
    description: 'Go for walk',
    completed: true,
    index: 1,
  },
  {
    description: 'Go to the city',
    completed: false,
    index: 2,
  },
];

const displayTodoList = (todos) => {
  const todosList = document.getElementById('todos-list');
  todos.forEach((todo) => {
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';
    todoItem.innerHTML = `<div class="todo-item-left"><input type="checkbox" class="checkbox" ${todo.completed ? 'checked' : ''}>
    <p>${todo.description}</p></div>
    <span class="material-symbols-outlined">more_vert</span>`;
    todosList.appendChild(todoItem);
  });
  const clearList = document.createElement('li');
  clearList.classList.add('clear-list');
  clearList.innerText = 'Clear All Completed';
  todosList.appendChild(clearList);
};

window.addEventListener('load', () => {
  displayTodoList(todos);
});
