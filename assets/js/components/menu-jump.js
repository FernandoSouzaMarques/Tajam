import jump from '../jumpjs/src/jump.js';

class Menu {
  constructor(elm) {
    this.elm = elm;
    this.items = this.elm.querySelectorAll('li');
    this.setup();
  }

  setup() {
    this.items.forEach((elm) => {
      elm.firstElementChild.addEventListener('click', (evt) => {
        evt.preventDefault();
        const idSection = evt.currentTarget.getAttribute('href');
        this.jumpToSection(idSection);
      })
    });
  }

  jumpToSection(id) {
    jump(id);
  }
}

export default {
  create(elm) {
    const elements = document.querySelectorAll(elm);
    const instances = [];

    Array.from(elements).forEach(elm => {
      instances.push(new Menu(elm));
    })
  }
}

export const Class = Menu;
