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
var c221 = document.getElementsByClassName('c221');
var c222 = document.getElementsByClassName('c222');

function clicker() {
	var superstate = localStorage.getItem('superstate');
	var substate = localStorage.getItem('substate');
	if(substate === '0') {
		for(var i = 0; i < navigators.length; ++i)
			navigators[i].style.height = '100%';
		for(var i = 0; i < presenters.length; ++i)
			presenters[i].style.width = '0';
		for(var i = 0; i < c2.length; ++i)
			c2[i].style.display = 'none';
		for(var i = 0; i < c211.length; ++i)
			c211[i].style.display = 'none';
		for(var i = 0; i < c212.length; ++i)
			c212[i].style.display = 'none';
		for(var i = 0; i < c213.length; ++i)
			c213[i].style.display = 'none';
		for(var i = 0; i < c214.length; ++i)
			c214[i].style.display = 'none';
		for(var i = 0; i < c221.length; ++i)
			c221[i].style.display = 'none';
		for(var i = 0; i < c222.length; ++i)
			c222[i].style.display = 'none';
		if(superstate === '0') {
			document.getElementById('subnavigation').style.height = '0';
			for(var i = 0; i < c1.length; ++i)
				c1[i].style.display = 'none';
			for(var i = 0; i < c11.length; ++i)
				c11[i].style.display = 'none';
			for(var i = 0; i < c12.length; ++i)
				c12[i].style.display = 'none';
		}
		else {
			document.getElementById('subnavigation').style.height = '100%';
			for(var i = 0; i < c1.length; ++i)
				c1[i].style.display = 'block';
			if(superstate === '1') {
				for(var i = 0; i < c11.length; ++i)
					c11[i].style.display = 'block';
				for(var i = 0; i < c12.length; ++i)
					c12[i].style.display = 'none';
			}
			else if(superstate === '2') {
				for(var i = 0; i < c11.length; ++i)
					c11[i].style.display = 'none';
				for(var i = 0; i < c12.length; ++i)
					c12[i].style.display = 'block';
			}
		}
		for(var i = 0; i < c0.length; ++i)
			c0[i].style.display = 'block';
	}
	else {
		for(var i = 0; i < navigators.length; ++i)
			navigators[i].style.height = '20%';
		document.getElementById('imagesection').style.width = '69%';
		document.getElementById('textsection').style.width = '30%';
		for(var i = 0; i < c0.length; ++i)
			c0[i].style.display = 'none';
		for(var i = 0; i < c1.length; ++i)
			c1[i].style.display = 'none';
		for(var i = 0; i < c11.length; ++i)
			c11[i].style.display = 'none';
		for(var i = 0; i < c12.length; ++i)
			c12[i].style.display = 'none';
		if(superstate === '1') {
			if(substate === '1') {
				for(var i = 0; i < c212.length; ++i)
					c212[i].style.display = 'none';
				for(var i = 0; i < c213.length; ++i)
					c213[i].style.display = 'none';
				for(var i = 0; i < c214.length; ++i)
					c214[i].style.display = 'none';
				for(var i = 0; i < c221.length; ++i)
					c221[i].style.display = 'none';
				for(var i = 0; i < c222.length; ++i)
					c222[i].style.display = 'none';
				for(var i = 0; i < c211.length; ++i)
					c211[i].style.display = 'block';
			}
			else if(substate === '2') {
				for(var i = 0; i < c211.length; ++i)
					c211[i].style.display = 'none';
				for(var i = 0; i < c213.length; ++i)
					c213[i].style.display = 'none';
				for(var i = 0; i < c214.length; ++i)
					c214[i].style.display = 'none';
				for(var i = 0; i < c221.length; ++i)
					c221[i].style.display = 'none';
				for(var i = 0; i < c222.length; ++i)
					c222[i].style.display = 'none';
				for(var i = 0; i < c212.length; ++i)
					c212[i].style.display = 'block';

			}
			else if(substate === '3') {
				for(var i = 0; i < c211.length; ++i)
					c211[i].style.display = 'none';
				for(var i = 0; i < c212.length; ++i)
					c212[i].style.display = 'none';
				for(var i = 0; i < c214.length; ++i)
					c214[i].style.display = 'none';
				for(var i = 0; i < c221.length; ++i)
					c221[i].style.display = 'none';
				for(var i = 0; i < c222.length; ++i)
					c222[i].style.display = 'none';
				for(var i = 0; i < c213.length; ++i)
					c213[i].style.display = 'block';
			}
			else if(substate === '4') {
				for(var i = 0; i < c211.length; ++i)
					c211[i].style.display = 'none';
				for(var i = 0; i < c212.length; ++i)
					c212[i].style.display = 'none';
				for(var i = 0; i < c213.length; ++i)
					c213[i].style.display = 'none';
				for(var i = 0; i < c221.length; ++i)
					c221[i].style.display = 'none';
				for(var i = 0; i < c222.length; ++i)
					c222[i].style.display = 'none';
				for(var i = 0; i < c214.length; ++i)
					c214[i].style.display = 'block';
			}
		}
		else if(superstate === '2') {
			if(substate === '1') {
				for(var i = 0; i < c211.length; ++i)
					c211[i].style.display = 'none';
				for(var i = 0; i < c212.length; ++i)
					c212[i].style.display = 'none';
				for(var i = 0; i < c213.length; ++i)
					c213[i].style.display = 'none';
				for(var i = 0; i < c214.length; ++i)
					c214[i].style.display = 'none';
				for(var i = 0; i < c222.length; ++i)
					c222[i].style.display = 'none';
				for(var i = 0; i < c221.length; ++i)
					c221[i].style.display = 'block';
			}
			else if(substate === '2') {
				for(var i = 0; i < c211.length; ++i)
					c211[i].style.display = 'none';
				for(var i = 0; i < c212.length; ++i)
					c212[i].style.display = 'none';
				for(var i = 0; i < c213.length; ++i)
					c213[i].style.display = 'none';
				for(var i = 0; i < c214.length; ++i)
					c214[i].style.display = 'none';
				for(var i = 0; i < c221.length; ++i)
					c221[i].style.display = 'none';
				for(var i = 0; i < c222.length; ++i)
					c222[i].style.display = 'block';
			}
		}
		for(var i = 0; i < c2.length; ++i)
			c2[i].style.display = 'block';
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

document.getElementById('upbutton').onclick = function() {
	localStorage.setItem('substate', 0);
	clicker();
}

var lengths = [4, 2];

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
	if (++backindex === backgrounds.length)
		backindex = 0;
}, 5000);

document.getElementById('mute').onclick = function() {
	var music = document.getElementById("music");
	if(music.muted)
		music.muted = false;
	else
		music.muted = true;
}
