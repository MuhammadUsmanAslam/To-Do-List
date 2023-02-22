const getFromLocalStorage = () => {
  let data = JSON.parse(localStorage.getItem('todos'));
  if (!data) {
    data = [];
  }
  return data;
};

const saveToLocalStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

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

const updateTodo = (todos, index, value) => {
  todos[index].description = value;

  saveToLocalStorage(todos);
};

const deleteTodoItem = (todos, index) => {
  const newTodos = todos.filter((todo, innerIndex) => index !== innerIndex);
  for (let i = 0; i < newTodos.length; i += 1) {
    newTodos[i].index = i;
  }
  saveToLocalStorage(newTodos);
};

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