import {createElement} from '../render.js';

function createTaskListTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

export default class ListView {
  getTemplate() {
    return createTaskListTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
