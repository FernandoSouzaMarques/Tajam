// import Menu from './components/menu.js';

// Menu.create();

console.log('
 _____      _                 
|_   _|_ _ (_) __ _ _ __ ___  
  | |/ _` || |/ _` | '_ ` _ \ 
  | | (_| || | (_| | | | | | |
  |_|\__,_|/ |\__,_|_| |_| |_|
         |__/ 
')


let btn = document.querySelector('[data-hamburger]');
let menu = document.querySelector('[data-menu]');
const topBar = document.querySelector('.s-header__top-bar');
let spy = new Gumshoe('#my-awesome-nav a');
spy.setup();


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
};


// video

const watch = document.querySelector('[data-watch]');
const video = document.getElementById("myVideo");
const overlay = document.querySelector('.s-watch__container');

watch.addEventListener('click', ()=> {
	if (video.paused) {
	  video.play();
	  video.classList.toggle('openVideo');
	  overlay.classList.toggle('background-story');
	  watch.classList.remove('w-play');
	  watch.classList.add('w-pause');
	} else {
	  video.pause();
	  video.classList.toggle('openVideo');
	  overlay.classList.toggle('background-story');
	  watch.classList.add('w-play');
	  watch.classList.remove('w-pause');
	}
});
