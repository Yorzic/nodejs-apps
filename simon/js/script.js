// JavaScript Document
let buttonColours = ["red", "blue", "yellow", "green"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

$(document).ready( function() {
	
	// Detect keyboard presses
	$(document).keypress( function() {
		if (level == 0) {
			$(".teaser").text("Good luck!");
		} else {
			$(".teaser").text("Level " + level);
		}
		
		nextSequence();
	});
	
	// Detect clicks
	$(".dice-table").click( function() {
		$(".teaser").text("Let's play!");
		userClickedPattern.push(this.id);
		animateButtonClick(this.id);
	});
	
});

function nextSequence() {
	let randomNumber = generateRandomNumber(4);
	let nextColour = buttonColours[randomNumber];
		
	gamePattern.push(nextColour);
		
	animateButtonClick(nextColour);
	
	level++
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

function playGame() {
	for (i = 0; i < buttonColours.length; i++) {
		animateButtonClick(buttonColours[i]);
		
	}
}