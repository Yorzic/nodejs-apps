// JavaScript Document
function generateRandomNumber(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function generateScore(player) {
	let randomNumber = generateRandomNumber(6) + 1;
//	alert("Player " + player + " number is " + randomNumber);
	updateDie(randomNumber);
}

function updateDie(number) {
	// Identify the die
	alert(number);
//	if (number == 1) {
//		alert("You're a lucky winner!");
//	}
	
	let dots = document.querySelectorAll("#die1 .dot");
	let frames = document.querySelectorAll("#die1 .dot-frame");
	
	if (number == 1) {
		dots[0].style.visibility = "hidden";
		frames[0].style = "display: table; height: 33.33%; width: 50%; background-color: none; float: left;";
		
		dots[1].style.visibility = "hidden";
		frames[1].style = "display: table; height: 33.33%; width: 50%; background-color: none; float: left;";
		
		dots[2].style.visibility = "visible";
		frames[2].style = "display: table; height: 33.33%; width: 100%; background-color: none; float: left;";
		
		dots[3].style.visibility = "hidden";
		frames[3].style = "display: none; height: 33.33%; width: 0%; background-color: none; float: left;";
		
		dots[4].style.visibility = "hidden";
		frames[4].style = "display: table; height: 33.33%; width: 50%; background-color: none; float: left;";
		
		dots[5].style.visibility = "hidden";
		frames[5].style = "display: table; height: 33.33%; width: 50%; background-color: none; float: left;";
	} else if (number == 2) {
		dots[0].style.visibility = "hidden";
		frames[0].style = "display: table; height: 33.33%; width: 50%; background-color: none; float: left;";
		
		dots[1].style.visibility = "visible";
		frames[1].style = "display: table; height: 33.33%; width: 50%; background-color: none; float: left;";
		
		dots[2].style.visibility = "hidden";
		frames[2].style = "display: table; height: 33.33%; width: 50%; background-color: none; float: left;";
		
		dots[3].style.visibility = "hidden";
		frames[3].style = "display: table; height: 33.33%; width: 50%; background-color: none; float: left;";
		
		dots[4].style.visibility = "visible";
		frames[4].style = "display: table; height: 33.33%; width: 50%; background-color: none; float: left;";
		
		dots[5].style.visibility = "hidden";
		frames[5].style = "display: table; height: 33.33%; width: 50%; background-color: none; float: left;";
	} else if (number == 3) {
		dots[0].style.visibility = "hidden";
		frames[0].style = "display: table; height: 33.33%; width: 50%; background-color: none; float: left;";
		
		dots[1].style.visibility = "visible";
		frames[1].style = "display: table; height: 33.33%; width: 50%; background-color: none; float: left;";
		
		dots[2].style.visibility = "visible";
		frames[2].style = "display: table; height: 33.33%; width: 100%; background-color: none; float: left;";
		
		dots[3].style.visibility = "hidden";
		frames[3].style = "display: none; height: 33.33%; width: 0%; background-color: none; float: left;";
		
		dots[4].style.visibility = "visible";
		frames[4].style = "display: table; height: 33.33%; width: 50%; background-color: none; float: left;";
		
		dots[5].style.visibility = "hidden";
		frames[5].style = "display: table; height: 33.33%; width: 50%; background-color: none; float: left;";
	} else if (number == 4) {
		dots[0].style.visibility = "visible";
		frames[0].style = "display: table; height: 33.33%; width: 50%; background-color: none; float: left;";
		
		dots[1].style.visibility = "visible";
		frames[1].style = "display: table; height: 33.33%; width: 50%; background-color: none; float: left;";
		
		dots[2].style.visibility = "hidden";
		frames[2].style = "display: table; height: 33.33%; width: 50%; background-color: none; float: left;";
		
		dots[3].style.visibility = "hidden";
		frames[3].style = "display: table; height: 33.33%; width: 50%; background-color: none; float: left;";
		
		dots[4].style.visibility = "visible";
		frames[4].style = "display: table; height: 33.33%; width: 50%; background-color: none; float: left;";
		
		dots[5].style.visibility = "visible";
		frames[5].style = "display: table; height: 33.33%; width: 50%; background-color: none; float: left;";
	} else if (number == 5) {
		dots[0].style.visibility = "visible";
		frames[0].style = "display: table; height: 33.33%; width: 50%; background-color: none; float: left;";
		
		dots[1].style.visibility = "visible";
		frames[1].style = "display: table; height: 33.33%; width: 50%; background-color: none; float: left;";
		
		dots[2].style.visibility = "visible";
		frames[2].style = "display: table; height: 33.33%; width: 100%; background-color: none; float: left;";
		
		dots[3].style.visibility = "hidden";
		frames[3].style = "display: none; height: 33.33%; width: 100%; background-color: none; float: left;";
		
		dots[4].style.visibility = "visible";
		frames[4].style = "display: table; height: 33.33%; width: 50%; background-color: none; float: left;";
		
		dots[5].style.visibility = "visible";
		frames[5].style = "display: table; height: 33.33%; width: 50%; background-color: none; float: left;";
	} else if (number == 6) {
		// Show all dots
		dots[0].style.visibility = "visible";
		frames[0].style = "display: table; height: 33.33%; width: 50%; background-color: none; float: left;";
		
		dots[1].style.visibility = "visible";
		frames[1].style = "display: table; height: 33.33%; width: 50%; background-color: none; float: left;";
		
		dots[2].style.visibility = "visible";
		frames[2].style = "display: table; height: 33.33%; width: 50%; background-color: none; float: left;";
		
		dots[3].style.visibility = "visible";
		frames[3].style = "display: table; height: 33.33%; width: 50%; background-color: none; float: left;";
		
		dots[4].style.visibility = "visible";
		frames[4].style = "display: table; height: 33.33%; width: 50%; background-color: none; float: left;";
		
		dots[5].style.visibility = "visible";
		frames[5].style = "display: table; height: 33.33%; width: 50%; background-color: none; float: left;";
	}
	
	/*
	// Hide a dot
	dotcells[4].querySelector(".dot").style = "display:none;";
	// Display only one dot in the middle row
			dotCells[2].style = "width:100%;"
			dotCells[3].style = "display: none;"
	*/
}