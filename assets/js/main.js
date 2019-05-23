let btn = document.querySelector('[data-hamburger]');
let menu = document.querySelector('[data-menu]');
let spy = new Gumshoe('#my-awesome-nav a');

btn.addEventListener('click', (e) => {
	btn.classList.toggle('o-hamburger--is-active');
	menu.classList.toggle('c-menu--is-active');
})
