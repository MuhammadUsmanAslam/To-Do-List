// Adds new TODO item to the list
const addTodo = (todos, newTodoDescription) => {
  const newTodo = {
    description: newTodoDescription,
    completed: false,
    index: todos.length,
  };
  newTodoDescription.value = '';
  todos.push(newTodo);
  return todos;
};

// Updates single TODO item after edit
const updateTodo = (todos, index, value) => {
  todos[index].description = value;
  return todos;
};

// Deletes single TODO from the list
const deleteTodoItem = (todos, index) => {
  const newTodos = todos.filter((todo, innerIndex) => index !== innerIndex);
  for (let i = 0; i < newTodos.length; i += 1) {
    newTodos[i].index = i;
  }
  return newTodos;
};

// Deletes all completed Items in the list
const deleteAllCompleted = (todos) => {
  const newTodos = todos.filter((todo) => todo.completed !== true);
  for (let i = 0; i < newTodos.length; i += 1) {
    newTodos[i].index = i;
  }
  return newTodos;
};

module.exports = {
  addTodo,
  deleteTodoItem,
  deleteAllCompleted,
  updateTodo,
};