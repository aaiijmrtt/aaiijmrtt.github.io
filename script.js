var navigators = document.getElementsByClassName('navigator');
var presenters = document.getElementsByClassName('presenter');
var c0 = document.getElementsByClassName('c0');
var c1 = document.getElementsByClassName('c1');
var c11 = document.getElementsByClassName('c11');
var c12 = document.getElementsByClassName('c12');
var c2 = document.getElementsByClassName('c2');
var c211 = document.getElementsByClassName('c211');
var c212 = document.getElementsByClassName('c212');
var c213 = document.getElementsByClassName('c213');
var c214 = document.getElementsByClassName('c214');
var c215 = document.getElementsByClassName('c215');
var c216 = document.getElementsByClassName('c216');
var c221 = document.getElementsByClassName('c221');
var c222 = document.getElementsByClassName('c222');
var c223 = document.getElementsByClassName('c223');

function setDisplay(array, value) {
	for(var i = 0; i < array.length; ++i)
		array[i].style.display = value;
}

function clicker() {
	var superstate = localStorage.getItem('superstate');
	var substate = localStorage.getItem('substate');
	if(substate === '0') {
		for(var i = 0; i < navigators.length; ++i)
			navigators[i].style.height = '100%';
		for(var i = 0; i < presenters.length; ++i)
			presenters[i].style.width = '0';
		setDisplay(c2, 'none');
		setDisplay(c211, 'none');
		setDisplay(c212, 'none');
		setDisplay(c213, 'none');
		setDisplay(c214, 'none');
		setDisplay(c215, 'none');
		setDisplay(c216, 'none');
		setDisplay(c221, 'none');
		setDisplay(c222, 'none');
		setDisplay(c223, 'none');
		setDisplay(c1, 'none');
		setDisplay(c11, 'none');
		setDisplay(c12, 'none');
		if(superstate === '0')
			document.getElementById('subnavigation').style.height = '0';
		else {
			document.getElementById('subnavigation').style.height = '100%';
			setDisplay(c1, 'block');
			if(superstate === '1')
				setDisplay(c11, 'block');
			else if(superstate === '2')
				setDisplay(c12, 'block');
		}
		setDisplay(c0, 'block');
	}
	else {
		for(var i = 0; i < navigators.length; ++i)
			navigators[i].style.height = '20%';
		document.getElementById('imagesection').style.width = '69%';
		document.getElementById('textsection').style.width = '30%';
		setDisplay(c0, 'none');
		setDisplay(c1, 'none');
		setDisplay(c11, 'none');
		setDisplay(c12, 'none');
		setDisplay(c211, 'none');
		setDisplay(c212, 'none');
		setDisplay(c213, 'none');
		setDisplay(c214, 'none');
		setDisplay(c215, 'none');
		setDisplay(c216, 'none');
		setDisplay(c221, 'none');
		setDisplay(c222, 'none');
		setDisplay(c223, 'none');
		if(superstate === '1') {
			if(substate === '1')
				setDisplay(c211, 'block');
			else if(substate === '2')
				setDisplay(c212, 'block');
			else if(substate === '3')
				setDisplay(c213, 'block');
			else if(substate === '4')
				setDisplay(c214, 'block');
			else if(substate === '5')
				setDisplay(c215, 'block');
			else if(substate === '6')
				setDisplay(c216, 'block');
		}
		else if(superstate === '2') {
			if(substate === '1')
				setDisplay(c221, 'block');
			else if(substate === '2')
				setDisplay(c222, 'block');
			else if(substate === '3')
				setDisplay(c223, 'block');
		}
		setDisplay(c2, 'block');
	}
}

document.getElementById('namesection').onclick = function() {
	localStorage.setItem('superstate', 0);
	localStorage.setItem('substate', 0);
	clicker();
}

document.getElementById('l1').onclick = function() {
	localStorage.setItem('superstate', 1);
	localStorage.setItem('substate', 0);
	clicker();
}

document.getElementById('l2').onclick = function() {
	localStorage.setItem('superstate', 2);
	localStorage.setItem('substate', 0);
	clicker();
}

document.getElementById('l11').onclick = function() {
	localStorage.setItem('superstate', 1);
	localStorage.setItem('substate', 1);
	clicker();
}

document.getElementById('l12').onclick = function() {
	localStorage.setItem('superstate', 1);
	localStorage.setItem('substate', 2);
	clicker();
}

document.getElementById('l13').onclick = function() {
	localStorage.setItem('superstate', 1);
	localStorage.setItem('substate', 3);
	clicker();
}

document.getElementById('l14').onclick = function() {
	localStorage.setItem('superstate', 1);
	localStorage.setItem('substate', 4);
	clicker();
}

document.getElementById('l15').onclick = function() {
	localStorage.setItem('superstate', 1);
	localStorage.setItem('substate', 5);
	clicker();
}

document.getElementById('l16').onclick = function() {
	localStorage.setItem('superstate', 1);
	localStorage.setItem('substate', 6);
	clicker();
}

document.getElementById('l21').onclick = function() {
	localStorage.setItem('superstate', 2);
	localStorage.setItem('substate', 1);
	clicker();
}

document.getElementById('l22').onclick = function() {
	localStorage.setItem('superstate', 2);
	localStorage.setItem('substate', 2);
	clicker();
}

document.getElementById('l23').onclick = function() {
	localStorage.setItem('superstate', 2);
	localStorage.setItem('substate', 3);
	clicker();
}

document.getElementById('upbutton').onclick = function() {
	localStorage.setItem('substate', 0);
	clicker();
}

var lengths = [6, 3];

document.getElementById('leftbutton').onclick = function() {
	substate = localStorage.getItem('substate');
	if(parseInt(substate) === 1)
		localStorage.setItem('substate', lengths[parseInt(localStorage.getItem('superstate')) - 1]);
	else
		localStorage.setItem('substate', parseInt(substate) - 1);
	clicker();
}

document.getElementById('rightbutton').onclick = function() {
	substate = localStorage.getItem('substate');
	if(parseInt(substate) === lengths[parseInt(localStorage.getItem('superstate')) - 1])
		localStorage.setItem('substate', 1);
	else
		localStorage.setItem('substate', parseInt(substate) + 1);
	clicker();
}

localStorage.setItem('superstate', 0);
localStorage.setItem('substate', 0);
clicker();

var backindex = 0;
var backgrounds = ['background2.jpeg', 'background3.jpeg', 'background4.jpeg', 'background5.jpg', 'background6.jpeg', 'background1.jpeg'];

setInterval(function() {
	document.getElementById('back').setAttribute('src', 'images/' + backgrounds[backindex]);
	if(++backindex === backgrounds.length)
		backindex = 0;
}, 5000);

document.getElementById('mute').onclick = function() {
	var music = document.getElementById("music");
	music.muted = !music.muted;
}
