import { UI } from "./ui.js";
import { Request } from './request.js';
const ui = new UI();
const request = new Request();

// Setup module
// ------------------------------

const todoList = (function () {
  // Variables
  const todoListTableBody = document.querySelector('.js-todo-list-table-body');
  const addTodoButton = document.querySelector('.js-add-todo-button');
  const editTodoButton = document.querySelector('.js-edit-todo-button');
  const addTodoInput = document.querySelector('.js-add-todo-input');
  const addStatusInput = document.querySelector('.js-add-status-input');
  const alertMessageWrapper = document.querySelector('.js-alert-message-wrapper');

  //
  // Setup module components
  //

  const _eventListeners = function () {
    addTodoButton.addEventListener('click', _addTodos);
    document.addEventListener('click', function (e) {
      if (e.target.matches('.js-edit-todo')) {
        e.preventDefault();
        _editTodo(e.target);
      }
      if (e.target.matches('.js-remove-todo')) {
        e.preventDefault();
        _removeTodo(e.target);
      }
    });
    editTodoButton.addEventListener('click', _saveEditedTodo)
  }

  // Get Todos
  const _getTodos = function () {
    request.get('http://localhost:3000/todos')
      .then((todos) => {
        ui.setTodos(todos, todoListTableBody);
      })
  };

  // Add Todos
  const _addTodos = function (e) {
    e.preventDefault();
    ;

    if (_checkInput(addTodoInput)) {
      ui.alertMessage('Lütfen to do giriniz.', 'warning', alertMessageWrapper);
      return;
    }

    if (_checkInput(addStatusInput)) {
      ui.alertMessage('Lütfen status seçininiz.', 'warning', alertMessageWrapper);
      return;
    }

    request.post('http://localhost:3000/todos', {
      title: addTodoInput.value,
      completed: addStatusInput.value
    }).then(() => {
      _getTodos();
      ui.alertMessage('To do başarıyla eklendi.', 'success', alertMessageWrapper);
      ui.clearInput(addTodoInput);
      ui.clearInput(addStatusInput);
    })
  }

  // Edit Todo
  const _editTodo = function (element) {
    const thisRow = element.closest('tr');
    ui.editTodo(addTodoInput, addStatusInput, thisRow);
    ui.changeActionsButton(true);
  }

  // Remove Todo 
  const _removeTodo = function (element) {
    const thisRow = element.closest('tr');
    const id = thisRow.dataset.id
    request.delete(`http://localhost:3000/todos/${id}`)
      .then(() => {
        _getTodos();
        ui.alertMessage('To do başarıyla silindi.', 'success', alertMessageWrapper);
      })
  }

  // Check input
  const _checkInput = function (input) {
    return input.value ? false : true
  }

  // Save edited Todo 
  const _saveEditedTodo = function (e) {
    e.preventDefault();

    if (_checkInput(addTodoInput)) {
      ui.alertMessage('Lütfen to do giriniz.', 'warning', alertMessageWrapper);
      return;
    }

    if (_checkInput(addStatusInput)) {
      ui.alertMessage('Lütfen status seçininiz.', 'warning', alertMessageWrapper);
      return;
    }

    request.put(`http://localhost:3000/todos/${this.dataset.id}`, {
      title: addTodoInput.value,
      completed: addStatusInput.value
    }).then(() => {
      _getTodos();
      ui.alertMessage('To do başarıyla eklendi.', 'success', alertMessageWrapper);
      ui.clearInput(addTodoInput);
      ui.clearInput(addStatusInput);
      ui.changeActionsButton(false);
    })

  }

  //
  // Return objects assigned to module
  //

  return {
    init: function () {
      _eventListeners();
      _getTodos();
    },
  };
})();

// Initialize module
// ------------------------------

document.addEventListener("DOMContentLoaded", function () {
  todoList.init();
});