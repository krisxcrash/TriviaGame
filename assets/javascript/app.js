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
var questions = ["question-1", "question-2", "question-3", "question-4", "question-5", "question-6", "question-7", "question-8", "question-9", "question-10"];



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
	$(".question-1").removeClass("hidden");
		$("#question-div").innerHTML= q;
	


	}


	function nextQuestion() {
		for (var i = 0; i < questions.length; i++) {
			var q = questions[i].question;
		
	}
}



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

// the selector will match all input controls of type :checkbox
// and attach a click event handler 
$("input:checkbox").on('click', function() {
	// in the handler, 'this' refers to the box clicked on
	var $box = $(this);
	if ($box.is(":checked")) {
	  // the name of the box is retrieved using the .attr() method
	  // as it is assumed and expected to be immutable
	  var group = "input:checkbox[name='" + $box.attr("name") + "']";
	  // the checked state of the group/box on the other hand will change
	  // and the current value is retrieved using .prop() method
	  $(group).prop("checked", false);
	  $box.prop("checked", true);
	} else {
	  $box.prop("checked", false);
	}
  });