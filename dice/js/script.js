// JavaScript Document
function play() {
	let playerOneNumber = generateRandomNumber(6) + 1;
	let playerTwoNumber = generateRandomNumber(6) + 1;
	
	generateScore(1, playerOneNumber);
	generateScore(2, playerTwoNumber);
	
	if (playerOneNumber > playerTwoNumber) {
		document.getElementById("player1").innerHTML = "Player 1 wins! 🥳"
		document.getElementById("player2").innerHTML = "Player 1 loses! 😭"
	} else if (playerOneNumber < playerTwoNumber) {
		document.getElementById("player1").innerHTML = "Player 1 loses! 😭"
		document.getElementById("player2").innerHTML = "Player 1 wins! 🥳"
	} else {
		document.getElementById("player1").innerHTML = "It's a tie! 😱"
		document.getElementById("player2").innerHTML = "It's a tie! 😱"
	}
}

function generateRandomNumber(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function generateScore(player, number) {
	updateDie(player, number);
}

function updateDie(player, number) {
	// Identify the die
	let style = "display: table; height: 33.33%; width: 50%; background-color: none; float: left;";
	let fullWidth = "display: table; height: 33.33%; width: 100%; background-color: none; float: left;";
	let hideElement = "display: none; height: 33.33%; width: 0%; background-color: none; float: left;";
	
	var dots = document.querySelectorAll("#die1 .dot");
	var frames = document.querySelectorAll("#die1 .dot-frame");
	
	if (player == 2) {
		dots = document.querySelectorAll("#die2 .dot");
		frames = document.querySelectorAll("#die2 .dot-frame");
	}
	
	if (number == 1) {
		dots[0].style.visibility = "hidden";
		frames[0].style = style;
		
		dots[1].style.visibility = "hidden";
		frames[1].style = style;
		
		dots[2].style.visibility = "visible";
		frames[2].style = fullWidth;
		
		dots[3].style.visibility = "hidden";
		frames[3].style = hideElement;
		
		dots[4].style.visibility = "hidden";
		frames[4].style = style;
		
		dots[5].style.visibility = "hidden";
		frames[5].style = style;
	} else if (number == 2) {
		dots[0].style.visibility = "hidden";
		frames[0].style = style;
		
		dots[1].style.visibility = "visible";
		frames[1].style = style;
		
		dots[2].style.visibility = "hidden";
		frames[2].style = style;
		
		dots[3].style.visibility = "hidden";
		frames[3].style = style;
		
		dots[4].style.visibility = "visible";
		frames[4].style = style;
		
		dots[5].style.visibility = "hidden";
		frames[5].style = style;
	} else if (number == 3) {
		dots[0].style.visibility = "hidden";
		frames[0].style = style;
		
		dots[1].style.visibility = "visible";
		frames[1].style = style;
		
		dots[2].style.visibility = "visible";
		frames[2].style = fullWidth;
		
		dots[3].style.visibility = "hidden";
		frames[3].style = hideElement;
		
		dots[4].style.visibility = "visible";
		frames[4].style = style;
		
		dots[5].style.visibility = "hidden";
		frames[5].style = style;
	} else if (number == 4) {
		dots[0].style.visibility = "visible";
		frames[0].style = style;
		
		dots[1].style.visibility = "visible";
		frames[1].style = style;
		
		dots[2].style.visibility = "hidden";
		frames[2].style = style;
		
		dots[3].style.visibility = "hidden";
		frames[3].style = style;
		
		dots[4].style.visibility = "visible";
		frames[4].style = style;
		
		dots[5].style.visibility = "visible";
		frames[5].style = style;
	} else if (number == 5) {
		dots[0].style.visibility = "visible";
		frames[0].style = style;
		
		dots[1].style.visibility = "visible";
		frames[1].style = style;
		
		dots[2].style.visibility = "visible";
		frames[2].style = fullWidth;
		
		dots[3].style.visibility = "hidden";
		frames[3].style = hideElement;
		
		dots[4].style.visibility = "visible";
		frames[4].style = style;
		
		dots[5].style.visibility = "visible";
		frames[5].style = style;
	} else if (number == 6) {
		// Show all dots
		dots[0].style.visibility = "visible";
		frames[0].style = style;
		
		dots[1].style.visibility = "visible";
		frames[1].style = style;
		
		dots[2].style.visibility = "visible";
		frames[2].style = style;
		
		dots[3].style.visibility = "visible";
		frames[3].style = style;
		
		dots[4].style.visibility = "visible";
		frames[4].style = style;
		
		dots[5].style.visibility = "visible";
		frames[5].style = style;
	}
}