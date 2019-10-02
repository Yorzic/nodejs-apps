// JavaScript Document
let awesomeness = ["Wunderbar", "Splendid", "Marvellous", "Epic stuff", "Cool beans", "Unbelievable", "You rock"];
let buttonColours = ["red", "blue", "yellow", "green"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var timesClicked = 0;
var countdown = 3;

$(document).ready( function() {
	resetGame();
	
	// Detect keyboard presses
	$(document).keypress( function() {
		nextSequence();
	});
	
	// Detect clicks
	$(".dice-table").click( function() {
		userClickedPattern.push(this.id);
		animateButtonClick(this.id);
		timesClicked++
		
		if (timesClicked == level) {
			$(".teaser").text("Wundebar!");
			setTimeout(function() {
				nextSequence();
			}, 1000);
		} else {
			checkAnswer(timesClicked);
		}
		
		$("#console").text(gamePattern + " | " + userClickedPattern);
		
	});
	
});

function nextSequence() {
	userClickedPattern = [];
	timesClicked = 0;
	level++
	
	let randomNumber = generateRandomNumber(4);
	let nextColour = buttonColours[randomNumber];
		
	gamePattern.push(nextColour);
	
	$("body").css("background-color", "#283149");
	$(".teaser").text("Level " + level);
	$("#console").text(gamePattern + " | " + userClickedPattern);
	
	setTimeout(function() {
		animateButtonClick(nextColour);
	}, 1000);	
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

function checkAnswer(level) {
	if (gamePattern[level - 1] == userClickedPattern[level - 1]) {
		$("#result").text("Correct. Times clicked: " + timesClicked);
	} else {
		$("#result").text("Wrong. Times clicked: " + timesClicked);
		$(".teaser").text("Game over");
		$("body").css("background-color", "red");
		setTimeout(function() {
			resetGame();
		}, 3000);	
	}
}

function resetGame() {
	gamePattern = [];
	userClickedPattern = [];
	level = 0;
	timesClicked = 0;
	countdown = 3;
	$("body").css("background-color", "#283149");
	$(".teaser").text("Press Any Key to Start");
	$("#console").text("Game restarted.");
	$("#result").text("");
}