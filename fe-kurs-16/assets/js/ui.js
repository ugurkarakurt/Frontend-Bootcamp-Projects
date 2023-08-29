export class UI {
  constructor() {
    this.timeoutID = undefined;
    this.addTodoButton = document.querySelector('.js-add-todo-button');
    this.editTodoButton = document.querySelector('.js-edit-todo-button');
  }

  setTodos(todos, parentElement) {
    parentElement.innerHTML = ''
    todos.forEach((todo, index) => {
      let status;

      if (todo.completed === 'in_progress') {
        status = 'In Progress'
      } else if (todo.completed === 'todo') {
        status = 'To Do'
      } else {
        status = 'Complete'
      }

      parentElement.innerHTML += `
      <tr data-id="${todo.id}" data-title="${todo.title}" data-completed="${todo.completed}">
        <td>${index + 1}</td>
        <td>${todo.title}</td>
        <td>${status}</td>
        <td>
          <button class="js-edit-todo"></button>
          <button class="js-remove-todo"></button>
        </td>
      </tr>
      `
    });
  }

  editTodo(todoInput, statusInput, row) {
    const { id, title, completed } = row.dataset;
    todoInput.value = title;
    statusInput.value = completed;
    this.editTodoButton.dataset.id = id;

  }

  changeActionsButton(status) {
    if (status) {
      this.addTodoButton.classList.remove('active');
      this.editTodoButton.classList.add('active');
    } else {
      this.addTodoButton.classList.add('active');
      this.editTodoButton.classList.remove('active');
    }

  }

  clearInput(element) {
    element.value = '';
  }

  alertMessage(message, type, element) {
    element.innerHTML = `
    <div id="alertMessagePopup" class="${type} slide-left">${message}</div>
  `

    clearTimeout(this.timeoutID);

    this.timeoutID = setTimeout(() => {
      element.innerHTML = '';
    }, 2000);
  }
}