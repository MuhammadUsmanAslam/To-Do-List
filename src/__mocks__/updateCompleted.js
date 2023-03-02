const updateCompleted = (todos, index, checked) => {
  if (checked) {
    todos[index].completed = true;
  } else {
    todos[index].completed = false;
  }
  return todos;
};

export default updateCompleted;