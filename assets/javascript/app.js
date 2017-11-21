// button onclick - start game

//start game - 
	// start clock timer 30 seconds
	// first question
	// if timer runs out, next question
	// if user guesses correctly, score ++
	// if user guesses incorrectly, next question

//next question, restart timer & repeat 

// when last question answered, display user score & giphy

var timerRunning;


$(document).ready( function() {
	timerRunning = false;
});

$("#ready-btn").click(function () {


	var time = 31;
	var timer = setInterval(startTimer, 1000);
	startGame();

function startGame() {
	$("#ready-q").addClass("hidden");
	$("#ready-btn").addClass("hidden");
	startTimer();
	triviaGame();
}

function triviaGame() {
	$("#question-1").removeClass("hidden");

}

// function endGame() {

// }

function startTimer() {
	$("#timer").removeClass("hidden");
	timerRunning = true;
	if (timerRunning) {
		time--;
		if (time <= -1) {
			clearInterval(timer);
			// seeResults();
			return;
		}
	}
	document.getElementById("timer").innerHTML = time;
}


});
