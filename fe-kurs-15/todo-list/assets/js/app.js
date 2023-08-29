import { inputCleaner, removeAnElement, addListItem } from "./ui.js";
import Request from "./request.js";


const counter = (function () {
  const request = new Request();

  //Variables
  const todoListWrapper = document.querySelector('.js-todo-list-wrapper');
  const addTodoInput = document.querySelector('.js-add-todo-input');
  const addTodoButton = document.querySelector('.js-add-todo-button');


  // EventListerners
  const _eventListeners = function () {
    addTodoButton.addEventListener('click', _addTodo);
    todoListWrapper.addEventListener('click', _documentListener);
  }

  // Add a Todo 
  const _addTodo = function () {
    const inputValue = addTodoInput.value;
    todoListWrapper.innerHTML += addListItem(inputValue);
    inputCleaner(addTodoInput)
  }

  // Document Objectisne eklenen eventListener ile yapılacak işlemler // Fonksiyona atma sebebim, sadece silme işlemi yapmayabiliriz. Bir dropdown menu işlemi için de aynı fonksiyon kullnılacak
  const _documentListener = function (e) {
    if (e.target.matches('.js-todo-list-item')) { // List item silmek için
      removeAnElement(e.target)
    }
  }

  const _getData = function () {
    request.get('https://swapi.dev/api/people/').then((data) => {
      const results = data.results
      results.forEach(result => {
        todoListWrapper.innerHTML += addListItem(result.name);
      });
    })
  }

  return {
    init: function () {
      _eventListeners();
      _getData();
    },
  };
})();

document.addEventListener("DOMContentLoaded", function () {
  counter.init();
});

