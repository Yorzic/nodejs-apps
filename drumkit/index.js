// Find the first button in our document and add event listener
// The function listens for the click action and triggers the handleClick() method.

// Handle keyboard entry
document.addEventListener('keydown', function(event) {
	playAudioWithCode(event.keyCode);
});

// Handle clicks
let buttons = document.querySelectorAll(".drum");

buttons.forEach(function(element) { 
	let elementClass = element.classList[0];
	var soundCode = 0;
	
	if (elementClass == "w") {
		soundCode = 87;
		element.style = "background-image: url('images/crash.png');"
	} 
	else if (elementClass == "a") {
		soundCode = 65;
		element.style = "background-image: url('images/kick.png');"
	} 
	else if (elementClass == "s") {
		soundCode = 83;
		element.style = "background-image: url('images/snare.png');"
	} 
	else if (elementClass == "d") {
		soundCode = 68;
		element.style = "background-image: url('images/tom1.png');"
	} 
	else if (elementClass == "j") {
		soundCode = 74;
		element.style = "background-image: url('images/tom2.png');"
	} 
	else if (elementClass == "k") {
		soundCode = 75;
		element.style = "background-image: url('images/tom3.png');"
	} 
	else if (elementClass == "l") {
		soundCode = 76;
		element.style = "background-image: url('images/tom4.png');"
	} 
	
	// This is how you assign a function with an input as an event listener in JS :(
	element.addEventListener("click", function(){ handleClick(soundCode); }); 
});

function handleClick(soundCode) {
	playAudioWithCode(soundCode);
}

function playAudioWithCode(code) {	
	var audio = new Audio('sounds/crash.mp3');
	if(code == 87) {
		audio = new Audio('sounds/crash.mp3'); // w
    }
    else if(code == 65) {
        audio = new Audio('sounds/kick-bass.mp3'); // a
    }
	else if(code == 83) {
		audio = new Audio('sounds/snare.mp3'); // s
    }
	else if(code == 68) {
        audio = new Audio('sounds/tom-1.mp3'); // d
    }
	else if(code == 74) {
        audio = new Audio('sounds/tom-2.mp3'); // j
    }
	else if(code == 75) {
        audio = new Audio('sounds/tom-3.mp3'); // k
    }
	else if(code == 76) {
		audio = new Audio('sounds/tom-4.mp3'); // l
    }
	audio.play();
}