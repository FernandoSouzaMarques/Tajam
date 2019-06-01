// rascunho não funcional

// const posicoes = [];

// var menuAncors = ['home', 'about', 'expertise', 'teams', 'works', 'people', 'contact'];
// var teste  = '';
// for(let i = 0; i < menuAncors.length; i++) {
// 	teste = getPosicaoElemento(menuAncors[i]).top;
// 	posicoes.push(teste);
// }

// var menuteste = document.getElementById('my-awesome-nav');

// menuteste.addEventListener('click', (e) => {
// 	if(e.target.id == 'menu-expertise') {
// 		console.log(posicoes[2]);
// 	}
// });


// function getPosicaoElemento(elemID){
//     var offsetTrail = document.getElementById(elemID);
//     var offsetLeft = 0;
//     var offsetTop = 0;
//     while (offsetTrail) {
//         offsetLeft += offsetTrail.offsetLeft;
//         offsetTop += offsetTrail.offsetTop;
//         offsetTrail = offsetTrail.offsetParent;
//     }
//     if (navigator.userAgent.indexOf("Mac") != -1 && 
//         typeof document.body.leftMargin != "undefined") {
//         offsetLeft += document.body.leftMargin;
//         offsetTop += document.body.topMargin;
//     }
//     return {left:offsetLeft, top:offsetTop};
// }
 
//EXEMPLO CHAMADA
// alert("esquerda:" + getPosicaoElemento("about").left)


