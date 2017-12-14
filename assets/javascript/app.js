
var panel = $("#quiz-area");
var countStartNumber = 30;

var questions = [{
	question: `Who said, "My username is 'password' and my password is 'password'."?`,
	answers: ["Jared", "Big Head","Erlich","Dinesh"],
	correctAnswer: "Big Head",
	image: "https://gph.is/RZKzbT"
}, {
	question: "What was the name of the application that Pied Piper sold to Hooli?",
	answers: ["Pied Piper Chat","Piper Connect","Pied Messenger","Piper Chat"],
	correctAnswer: "Piper Chat",
	image: "https://gph.is/2pcLsCJ"
}, {
	question: "Who created the SeeFood application, Not Hotdog?",
	answers: ["Jin Yang","Erlich","Richard","Gilfoyle"],
	correctAnswer: "Jin Yang",
	image: "https://gph.is/2sJ8LEs"
}, {
	question: "What was the name of Gilfoyle's server?",
	answers: ["Antonio","Artemus","Anton","Android"],
	correctAnswer: "Anton",
	image: "https://gph.is/1Tyop8p"
}, {
	question: "What type of company did Keenan Feldspar have?",
	answers: ["Virtual Reality","Augmented Reality","Mixed Reality","Artificial Intelligence"],
	correctAnswer: "Virtual Reality",
	image: "https://gph.is/2swZ6l0"
}, {
	question: `Who said, "I'm not one to gush, but the possibilities of your consequence-free reality are darkly promising."?`,
	answers: ["Gilfoyle","Erlich","Dinesh","Richard"],
	correctAnswer: "Gilfoyle",
	image: "https://gph.is/1HSQXV8"
}, {
	question: "How much money did Peter Gregory offer students to drop out of college to pursue their dream?",
	answers: ["$1,000,000","$250,000","$500,000","$100,000"],
	correctAnswer: "d",
	image: "https://gph.is/1H189tV"
}, {
	question: "What was Jared's title while working for Pied Piper?",
	answers: ["Chief Operating Officer","Chief Financial Officer","Head of Business Development","Business Consultant"],
	correctAnswer: "Head of Business Development",
	image: "https://gph.is/22C4xWL"
}, {
	question: "What school did Big Head start teaching at?",
	answers: ["University of San Francisco","University of California, Berkeley","San Jose State University","Stanford University"],
	correctAnswer: "Stanford University",
	image: "https://gph.is/2pnj9wA"
}, {
	question: "What country did Gavin Belson travel to?",
	answers: ["Tibet","Burma","Bhutan","Nepal"],
	correctAnswer: "Tibet",
	image: "https://gph.is/1yrDfcF"
}, ];

var timer;

var game = {
	questions: questions,
	currentQuestions: 0,
	counter: countStartNumber,
	correct: 0,
	incorrect: 0,

	countdown: function() {
		this.counter--;
		$("#counter-number").html(this.counter);
		if (this.counter === 0) {
			console.log("time's up!");
			this.timeUp();
		}
	},
	loadQuestion: function() {
		timer = setInterval(this.countdown.bind(this), 1000);

		panel.html("<h2 class='h2-q'>" + questions[this.currentQuestion].question + "</h2>");

		for (var i = 0; questions[this.currentQuestion].answers.length; i++ ) {
			panel.append("<button class='btn btn-lg btn-alert answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i]
			+ "'>" + questions[this.currentQuestion].answers[i] + "</button>");
		}
	},
	nextQuestion: function() {
		this.counter = window.countStartNumber;
		$("#counter-number").html(this.counter);
		this.currentQuestion++;
		this.loadQuestion.bind(this)();
	},
	timeUp: function() {
		
	}
}