let btn = document.querySelector('[data-hamburger]');
let spy = new Gumshoe('#my-awesome-nav a');
const topBar = document.querySelector('.s-header__top-bar');

btn.addEventListener('click', (e) => {
	btn.classList.toggle('o-hamburger--is-active');
	menu.classList.toggle('c-menu--is-active');
})

window.onscroll = scroll;

function scroll () {
	if (window.pageYOffset >= 20) {
		topBar.classList.add('s-header__top-bar-bg');
	} else {
		topBar.classList.remove('s-header__top-bar-bg');
	}
}
