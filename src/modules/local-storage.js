// Fetch/GET data/TODOs from the localStorage
const getFromLocalStorage = () => {
  let data = JSON.parse(localStorage.getItem('todos'));
  if (!data) {
    data = [];
  }
  return data;
};

// Saves data/ TODOs in the localStorage
const saveToLocalStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export { getFromLocalStorage, saveToLocalStorage };