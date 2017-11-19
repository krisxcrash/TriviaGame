
var questions= [
	"What was the first high level programming language developed for a computer?", 
	"When was Plankalkül created?",
	"When was JavaScript created?",
	"Who was JavaScript created by?",
	"What was JavaScript's original name?",
	"Who coined the term Ajax?",
	"When was jQuery originally released?",
	"Who was the original author of jQuery?", 
	"Which license is jQuery under?"];

var choices: {["HTML", "Plankalkül", "CSS", "Java"],
	["Between 1971 and 1973", "Between 1964 and 1966", "Between 1943 and 1945", "Between 1980 and 1982"],
	["May 1995", "July 1993", "October 2001", "January 1996"],
	["Brandon Eight", "Eric Brand", "Gordon Smith", "Brendan Eich"],
	["Vanilla", "Mocha", "Carmel", "Java"],
	["3 months", "10 days", "1 year", "10 years"],
	["Jesse James Garrett", "John Paul Jefferson", "Sam Jacob Wills", "William Zach Cobb"],
	["June 2002", "February 2004", "January 2006", "December 2009"],
	["John Resig", "Phillip Knight", "David Walsh", "Ted Mosby"],
	["Harvard", "Facebook", "Twitter", "MIT"],
};

correctAnswer: [1,2,0,3,3,1,0,2,0,3];

var userScore = 0;
var userAnswer = [];
var intervalId;
var time = 30;



$(document).ready(function() {
		confirm("Are you ready to play?");


		if (confirm) {
			run();
		};

	function run() {
		intervalId = setInterval(decrement, 1000);
	};

	function decrement() {
		time--;

		$("#timer").html("<h1>" + time + "</h1>");

		if (time === 0) {

			stop();

			nextQuestion();
		};
	}
	function stop() {
		clearInterval(intervalId);

	}

	// function nextQuestion() {
	// 	run();

	// 	$(".question").html("<h3>" + questions[i] + "</h3>")
	// }

// run();


});


// $(".answer").on("click", run);
