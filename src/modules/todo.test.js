const {
  addTodo, deleteTodoItem, updateTodo, deleteAllCompleted,
} = require('./todo.js');

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

describe('CRUD Operations on ToDo List', () => {
  test('Add ToDo item', () => {
    expect(
      addTodo(addTodos, 'k'),
    ).toEqual(newAddTodos);
  });

  test('Delete ToDo item', () => {
    expect(
      deleteTodoItem([1, 2, 3, 4, 5, 6], 4),
    ).toEqual([1, 2, 3, 4, 6]);
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
});