class Menu {
  constructor() {
    this.btn = document.querySelector('[data-hamburger]');
    this.menu = document.querySelector('[data-menu]');
    this.topBar = document.querySelector('.s-header__top-bar');
    this.setup();
  }

  setup() {
    this.menuMobile();
    this.gumshoe();
    this.scrollBar();
  }

  menuMobile() {
    this.btn.addEventListener('click', (e) => {
      alert('entrius');
      this.btn.classList.toggle('o-hamburger--is-active');
      this.menu.classList.toggle('c-menu--is-active');
    })
  }

  gunshoe() {
    let spy = new Gumshoe('#my-awesome-nav a');
  }

  scrollBar() {
    window.onscroll = scroll;
      if (window.pageYOffset >= 20) {
        this.topBar.classList.add('s-header__top-bar-bg');
      } else {
        this.topBar.classList.remove('s-header__top-bar-bg');
      }
  }
}

export default {
  create() {
    return new Menu();
  },
};

export const Class = Menu;
