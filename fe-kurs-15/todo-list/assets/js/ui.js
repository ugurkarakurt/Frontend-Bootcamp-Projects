export function inputCleaner(element) {
  element.value = '';
};

export function removeAnElement(element) {
  element.remove();
}

export function addListItem(inputValue) {
  return `<li class="js-todo-list-item">${inputValue}</li>`
}