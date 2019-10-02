// JavaScript Document
let buttonColours = ["red", "blue", "yellow", "green"];
	let gamePattern = [];

$(document).ready( function() {
	
  
	$(document).keypress( function() {
		$(".teaser").text("Good luck!");
		nextSequence();
	});
	
	$(".dice-table").click( function() {
		$(".teaser").text("Let's play!");
		nextSequence();
	});
	
});

function nextSequence() {
		let randomNumber = generateRandomNumber(4);
		let nextColour = buttonColours[randomNumber];
		
		gamePattern.push(nextColour);
		
		animateButtonClick(nextColour);
	}

function generateRandomNumber(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function animateButtonClick(id) {
	$("#" + id).addClass("pressed");
	setTimeout(function() {
			$("#" + id).removeClass("pressed");
	}, 300);
}