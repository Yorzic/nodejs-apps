// JavaScript Document

// Insert Main Menu
var mainMenu = document.getElementById("mainMenu");
mainMenu.insertAdjacentHTML('afterbegin', '<ul><li><a href="https://apy.app/micro/">ApyMicro</a></li><li><a href="https://apy.app/mini/">ApyMini</a></li><li><a href="https://apy.app/about/">About</a></li><li> <a href="https://apy.app/contact/">Contacts</a></li></ul>');

function generateScore(player) {
	let randomNumber = generateRandomNumber(6) + 1;
	
	alert("Player " + player + " number is " + randomNumber);
}

function generateRandomNumber(max) {
	return Math.floor(Math.random() * Math.floor(max));
}