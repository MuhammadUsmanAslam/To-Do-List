import { saveToLocalStorage, getFromLocalStorage, window } from '../__mocks__/local-storage.js';

describe('Set local storage item', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test('data is added into local storage', () => {
    const todo = [{ description: 'This is first todo' }];
    saveToLocalStorage(todo);
    expect(window.localStorage.getItem('todos')).toEqual(JSON.stringify(todo));
  });

  test('data is fetched from local storage', () => {
    const todo = [{ description: 'This is first todo' }];
    saveToLocalStorage(todo);
    expect(getFromLocalStorage()).toEqual(todo);
  });
});
