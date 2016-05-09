var classes = ['c0', 'c1', 'c11', 'c12', 'c13', 'c14', 'c15', 'c2', 'c211', 'c212', 'c213', 'c214', 'c215', 'c216', 'c221', 'c222', 'c223', 'c224', 'c225', 'c226', 'c227', 'c228'];
var texts = ['chessengines', 'minimax', 'alphabetapruning', 'neuralnetworks', 'gradientdescent', 'backpropagation', 'convolutions', 'wordvectors'];
var backgrounds = ['background2.jpeg', 'background3.jpeg', 'background4.jpeg', 'background5.jpg', 'background6.jpeg', 'background1.jpeg'];

var backindex = 0;
var lengths = [6, texts.length];

var navigators = document.getElementsByClassName('navigator');
var presenters = document.getElementsByClassName('presenter');

for(var i = 0; i < classes.length; ++i)
	window[classes[i]] = document.getElementsByClassName(classes[i]);

function textfunction(texts, i) {
	return function() {
		var element = document.getElementById(texts[i]);
		element.innerHTML = window['client' + i].responseText;
		MathJax.Hub.Queue(['Typeset', MathJax.Hub, element]);
	}
}

for(var i = 0; i < texts.length; ++i) {
	window['client' + i] = new XMLHttpRequest();
	window['client' + i].open('GET', 'texts/' + texts[i] + '.html');
	window['client' + i].onreadystatechange = textfunction(texts, i);
	window['client' + i].send();
}

function setDisplay(array, value) {
	for(var i = 0; i < array.length; ++i)
		array[i].style.display = value;
}

function clicker() {
	var superstate = localStorage.getItem('superstate');
	var substate = localStorage.getItem('substate');
	for(var i = 0; i < classes.length; ++i)
		setDisplay(window[classes[i]], 'none');
	if(substate === '0') {
		for(var i = 0; i < navigators.length; ++i)
			navigators[i].style.height = '100%';
		for(var i = 0; i < presenters.length; ++i)
			presenters[i].style.width = '0';
		if(superstate === '0')
			document.getElementById('subnavigation').style.height = '0';
		else {
			document.getElementById('subnavigation').style.height = '100%';
			setDisplay(c1, 'block');
			setDisplay(window['c1' + superstate], 'block');
		}
		setDisplay(c0, 'block');
	}
	else {
		for(var i = 0; i < navigators.length; ++i)
			navigators[i].style.height = '20%';
		document.getElementById('imagesection').style.width = '69%';
		document.getElementById('textsection').style.width = '30%';
		setDisplay(window['c2' + superstate + substate], 'block');
		setDisplay(c2, 'block');
	}
}

function statefunction(superstate, substate) {
	return function() {
		localStorage.setItem('superstate', superstate);
		localStorage.setItem('substate', substate);
		clicker();
	}
}

document.getElementById('namesection').onclick = statefunction(0, 0);
document.getElementById('l10').onclick = statefunction(1, 0);
document.getElementById('l20').onclick = statefunction(2, 0);
document.getElementById('l30').onclick = statefunction(3, 0);
document.getElementById('l40').onclick = statefunction(4, 0);
document.getElementById('l50').onclick = statefunction(5, 0);

for(var superstate  = 0; superstate < lengths.length; ++superstate)
	for(var substate = 0; substate < lengths[superstate]; ++substate)
		document.getElementById('l' + String(superstate + 1) + String(substate + 1)).onclick = statefunction(superstate + 1, substate + 1);

document.getElementById('upbutton').onclick = function() {
	localStorage.setItem('substate', 0);
	clicker();
}

document.getElementById('leftbutton').onclick = function() {
	substate = parseInt(localStorage.getItem('substate'));
	if(substate === 1)
		localStorage.setItem('substate', lengths[parseInt(localStorage.getItem('superstate')) - 1]);
	else
		localStorage.setItem('substate', substate - 1);
	clicker();
}

document.getElementById('rightbutton').onclick = function() {
	substate = parseInt(localStorage.getItem('substate'));
	if(substate === lengths[parseInt(localStorage.getItem('superstate')) - 1])
		localStorage.setItem('substate', 1);
	else
		localStorage.setItem('substate', substate + 1);
	clicker();
}

localStorage.setItem('superstate', 0);
localStorage.setItem('substate', 0);
clicker();

setInterval(function() {
	document.getElementById('back').setAttribute('src', 'images/' + backgrounds[backindex]);
	if(++backindex === backgrounds.length)
		backindex = 0;
}, 5000);

document.getElementById('mute').onclick = function() {
	var music = document.getElementById("music");
	music.muted = !music.muted;
}
