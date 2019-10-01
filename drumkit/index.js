// Find the first button in our document and add event listener
// The function listens for the click action and triggers the handleClick() method.

// Handle keyboard entry
document.addEventListener('keydown', function(event) {
	var buttonClass = "";
	
	switch(event.keyCode) {
		case 87:
			buttonClass = "w";
			break;
		case 65:
			buttonClass = "a";
			break;
		case 83:
			buttonClass = "s";
			break;
		case 68:
			buttonClass = "d";
			break;
		case 74:
			buttonClass = "j";
			break;
		case 75:
			buttonClass = "k";
			break;
		case 76:
			buttonClass = "l";
			break;
		default:
			//...
	}
	
	handleClick(event.keyCode, buttonClass);
});

// Handle clicks
let buttons = document.querySelectorAll(".drum");

buttons.forEach(function(element) { 
	let elementClass = element.classList[0];
	var soundCode = 0;
	
	switch (elementClass) {
		case "w":
			soundCode = 87;
			element.style = "background-image: url('images/crash.png');";
			break;
		case "a":
			soundCode = 65;
			element.style = "background-image: url('images/kick.png');";
			break;
		case "s":
			soundCode = 83;
			element.style = "background-image: url('images/snare.png');";
			break;
		case "d":
			soundCode = 68;
			element.style = "background-image: url('images/tom1.png');";
			break;
		case "j":
			soundCode = 74;
			element.style = "background-image: url('images/tom2.png');";
			break;
		case "k":
			soundCode = 75;
			element.style = "background-image: url('images/tom3.png');";
			break;
		case "l":
			soundCode = 76;
			element.style = "background-image: url('images/tom4.png');";
			break;
		default:
			// ...
	}
	
	// This is how you assign a function with an input as an event listener in JS :(
	element.addEventListener("click", function(){ handleClick(soundCode, elementClass); }); 
});

function handleClick(soundCode, elementClass) {
	playAudioWithCode(soundCode);
	flashButton(elementClass);
}

function playAudioWithCode(code) {	
	var audio = new Audio('');
	
	switch(code) {
		case 87:
			audio = new Audio('sounds/crash.mp3'); // w
			break;
		case 65:
			audio = new Audio('sounds/kick-bass.mp3'); // a
			break;
		case 83:
			audio = new Audio('sounds/snare.mp3'); // s
			break;
		case 68:
			audio = new Audio('sounds/tom-1.mp3'); // d
			break;
		case 74:
			audio = new Audio('sounds/tom-2.mp3'); // j
			break;
		case 75:
			audio = new Audio('sounds/tom-3.mp3'); // k
			break;
		case 76:
			audio = new Audio('sounds/tom-4.mp3'); // l
			break;
		default:
			// ...
	}
	
	audio.play();
}

function flashButton(currentKey) {
	var activeButton = document.querySelector("." + currentKey);
	
	activeButton.classList.add("pressed");
	
	setTimeout(function() {
		activeButton.classList.remove("pressed");
	}, 100);
}