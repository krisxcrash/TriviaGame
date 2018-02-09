
var panel = $("#quiz-area");
var countStartNumber = 30;

var questions = [{
	question: `Who said, "My username is 'password' and my password is 'password'."?`,
	answers: ["Jared", "Big Head","Erlich","Dinesh"],
	correctAnswer: "Big Head",
	image: "https://media.giphy.com/media/mXuPwCWpd2WLV5WCSQ/giphy.gif"
}, {
	question: "What was the name of the application that Pied Piper sold to Hooli?",
	answers: ["Pied Piper Chat","Piper Connect","Pied Messenger","Piper Chat"],
	correctAnswer: "Piper Chat",
	image: "https://media.giphy.com/media/3ohzdZSF5qNsDVyqek/giphy.gif"
}, {
	question: "Who created the SeeFood application, Not Hotdog?",
	answers: ["Jin Yang","Erlich","Richard","Gilfoyle"],
	correctAnswer: "Jin Yang",
	image: "https://media.giphy.com/media/l0Iy9iqThC2ueLTkA/giphy.gif"
}, {
	question: "What was the name of Gilfoyle's server?",
	answers: ["Antonio","Artemus","Anton","Android"],
	correctAnswer: "Anton",
	image: "https://media.giphy.com/media/3oEjHAWsCGowjkc3Ha/giphy.gif"
}, {
	question: "What type of company did Keenan Feldspar have?",
	answers: ["Virtual Reality","Augmented Reality","Mixed Reality","Artificial Intelligence"],
	correctAnswer: "Virtual Reality",
	image: "https://media.giphy.com/media/l4FGkCHRY6x2Oy97q/giphy.gif"
}, {
	question: `Who said, "I'm not one to gush, but the possibilities of your consequence-free reality are darkly promising."?`,
	answers: ["Gilfoyle","Erlich","Dinesh","Richard"],
	correctAnswer: "Gilfoyle",
	image: "https://media.giphy.com/media/TMNvE4XgrGkzm/giphy.gif"
}, {
	question: "How much money did Peter Gregory offer students to drop out of college to pursue their dream?",
	answers: ["$1,000,000","$250,000","$500,000","$100,000"],
	correctAnswer: "$100,000",
	image: "https://media.giphy.com/media/rWLFMDpUg3yV2/giphy.gif"
}, {
	question: "What was Jared's title while working for Pied Piper?",
	answers: ["Chief Operating Officer","Chief Financial Officer","Head of Business Development","Business Consultant"],
	correctAnswer: "Head of Business Development",
	image: "https://media.giphy.com/media/xT1XGOGdyDrL2BTfxK/giphy.gif"
}, {
	question: "What school did Big Head start teaching at?",
	answers: ["University of San Francisco","University of California, Berkeley","San Jose State University","Stanford University"],
	correctAnswer: "Stanford University",
	image: "https://media.giphy.com/media/3ohzdS1YWu0zGYc5xe/giphy.gif"
}, {
	question: "What country did Gavin Belson travel to?",
	answers: ["Tibet","Burma","Bhutan","Nepal"],
	correctAnswer: "Tibet",
	image: "https://media.giphy.com/media/3oEdv7vedu6iAZoqTS/giphy.gif"
}, ];

var timer;

var game = {
	questions: questions,
	currentQuestion: 0,
	counter: countStartNumber,
	correct: 0,
	incorrect: 0,

	countdown: function() {
		this.counter--;
		$("#counter-number").html(this.counter);
		if (this.counter === 0) {
			this.timeUp();
		}
	},
	loadQuestion: function() {
		timer = setInterval(this.countdown.bind(this), 1000);

		panel.html("<h3 class='h3-q'>" + questions[this.currentQuestion].question + "</h3>");

		for (var i = 0; i < questions[this.currentQuestion].answers.length; i++ ) {
			panel.append("<button class='btn btn-lg btn-danger answer-button btn-answers' id='button' data-name='" + questions[this.currentQuestion].answers[i]
			+ "'>" + questions[this.currentQuestion].answers[i] + "</button>");
		}
	},
	nextQuestion: function() {
		this.counter = window.countStartNumber;
		$("#counter-number").html(this.counter);
		this.currentQuestion++;
		console.log(this);
		this.loadQuestion.bind(this)();
	},
	timeUp: function() {
		clearInterval(window.timer);
		$("#counter-number").html(this.counter);

		panel.html("<h3>Out of Time!</h3>");
		panel.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer + "</h3>");
		panel.append("<br><img src='" + questions[this.currentQuestion].image + "' />");

		if (this.currentQuestion === questions.length -1) {
			setTimeout(this.results, 3 * 1000);
		}
		else {
			console.log(this);
			setTimeout(this.nextQuestion, 2 * 1000);
		}
	},
	results: function() {
		clearInterval(window.timer);
		panel.html("<h3>Here's how you did! </h3>");

		$("#counter-number").html(this.counter);

		panel.append("<h4>Correct Answers: " + this.correct + "</h4>");
		panel.append("<h4> Incorrect Answers: " + this.incorrect + "</h4>");
		panel.append("<h4>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h4>");
		panel.append("<br><button class='btn btn-danger btn-lg' id='start-over'>Start Over</button>");
	},
	clicked: function(e) {
		clearInterval(window.timer);

		if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
			this.answeredCorrectly();
		}
		else {
			this.answeredIncorrectly();
		}
	},

	answeredIncorrectly: function() {
		this.incorrect++;

		clearInterval(window.timer);

		panel.html("<h3>Bummer! That is not correct!</h3>");
		panel.html("<h3>The correct answer is: " + questions[this.currentQuestion].correctAnswer + "</h3>");
		panel.append("<br><img src='" + questions[this.currentQuestion].image + "' alt= 'giphy'/>");

		if (this.currentQuestion === questions.length - 1) {
			setTimeout(this.results.bind(this), 3 * 1000);
		}
		else {
			setTimeout(this.nextQuestion.bind(this), 3 * 1000);
		}
	},
	answeredCorrectly: function() {
		clearInterval(window.timer);

		this.correct++;

		panel.html("<h3>Nailed it!</h3>");
		panel.append("<br><img src='" + questions[this.currentQuestion].image + "' />");

		if (this.currentQuestion === questions.length - 1) {
			setTimeout(this.results.bind(this), 3 * 1000);
		}
		else {
			setTimeout(this.nextQuestion.bind(this), 3 * 1000);
		}
	},
	reset: function() {
		this.currentQuestion = 0;
		this.counter = 30;
		this.correct = 0;
		this.incorrect = 0;
		this.loadQuestion();
	}
};

$(document).on("click", "#start-over", game.reset.bind(game));
$(document).on("click", ".answer-button", function(e) {
	game.clicked.bind(game, e)();
});
$(document).on("click", "#start", function() {
	$("#ready").addClass("hidden");
	$("#sub-wrapper").prepend("<h1 id='timer'><span id='counter-number'>30</span></h1>");
	game.loadQuestion.bind(game)();
})