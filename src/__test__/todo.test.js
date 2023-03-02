import {
  addTodo, deleteTodoItem, updateTodo, deleteAllCompleted,
} from '../modules/todo.js';
import updateCompleted from '../__mocks__/updateCompleted.js';

const addTodos = [{
  description: 'i',
  completed: false,
  index: 0,
},
{
  description: 'j',
  completed: false,
  index: 1,
},
];
const newAddTodos = [{
  description: 'i',
  completed: false,
  index: 0,
},
{
  description: 'j',
  completed: false,
  index: 1,
},
{
  description: 'k',
  completed: false,
  index: 2,
},
];
// Add Todos Ends here

const updateTodos = [{
  description: 'U',
  completed: false,
  index: 0,
},
{
  description: 's',
  completed: false,
  index: 1,
},
];
const newUpdateTodos = [{
  description: 'UU',
  completed: false,
  index: 0,
},
{
  description: 's',
  completed: false,
  index: 1,
},
];

// Update Todos Ends Here

const deleteAllCompletedLists = [{
  description: '1',
  completed: true,
  index: 0,
},
{
  description: '2',
  completed: false,
  index: 1,
},
{
  description: '3',
  completed: true,
  index: 2,
},
];

const newDeleteAllCompletedLists = [
  {
    description: '2',
    completed: false,
    index: 0,
  },
];

// deleteAllCompletedList Todos Ends Here

const deleteTodoItemList = [
  {
    description: '1',
    completed: true,
    index: 0,
  },
  {
    description: '2',
    completed: false,
    index: 1,
  },
  {
    description: '3',
    completed: true,
    index: 2,
  },
];

const newDeleteTodoItemList = [
  {
    description: '1',
    completed: true,
    index: 0,
  },
  {
    description: '3',
    completed: true,
    index: 1,
  },
];

// Delete ToDo item Ends Here.

const todos = [
  {
    description: '1',
    completed: false,
    index: 0,
  },
  {
    description: '2',
    completed: false,
    index: 1,
  },
];

const newTodos = [
  {
    description: '1',
    completed: true,
    index: 0,
  },
  {
    description: '2',
    completed: false,
    index: 1,
  },
];

// UpdateCompleted Todos Ends Here

describe('CRUD Operations on ToDo List', () => {
  test('Add ToDo item', () => {
    expect(
      addTodo(addTodos, 'k'),
    ).toEqual(newAddTodos);
  });

  test('Delete ToDo item', () => {
    expect(
      deleteTodoItem(deleteTodoItemList, 1),
    ).toEqual(newDeleteTodoItemList);
  });

  test('Update ToDo item', () => {
    expect(
      updateTodo(updateTodos, 0, 'UU'),
    ).toEqual(newUpdateTodos);
  });

  test('Delete All Completed ToDo items', () => {
    expect(
      deleteAllCompleted(deleteAllCompletedLists),
    ).toEqual(newDeleteAllCompletedLists);
  });

  test('Update Completed ToDo item', () => {
    expect(
      updateCompleted(todos, 0, true),
    ).toEqual(newTodos);
  });
});