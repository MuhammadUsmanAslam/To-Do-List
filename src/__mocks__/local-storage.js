const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const dom = new JSDOM('<!DOCTYPE html><p>Hello world</p>');
const { window } = dom;

const localStorageMock = (() => {
  let store = {};

  return {
    getItem(key) {
      return store[key];
    },

    setItem(key, value) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

const saveToLocalStorage = (todos) => {
  window.localStorage.setItem('todos', JSON.stringify(todos));
};

const getFromLocalStorage = () => {
  let data = JSON.parse(window.localStorage.getItem('todos'));
  if (!data) {
    data = [];
  }
  return data;
};

export { saveToLocalStorage, getFromLocalStorage, window };