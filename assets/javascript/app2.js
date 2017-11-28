const myQuestions = [{
	question: `Who said, "My username is 'password' and my password is 'password'"?`,
	answers: {
		a: "Jared",
		b: "Big Head",
		c: "Erlich",
		d: "Dinesh"
	},
	correctAnswer: "b"
}, {
	question: "What was the name of the application that Pied Piper sold to Hooli?",
	answers: {
		a: "Pied Piper Chat",
		b: "Piper Connect",
		c: "Pied Messenger",
		d: "Piper Chat"
	},
	correctAnswer: "d"
}, {
	question: "Who created the SeeFood application, Not Hotdog?",
	answers: {
		a: "Jin Yang",
		b: "Erlich",
		c: "Richard",
		d: "Gilfoyle"
	},
	correctAnswer: "a"
}, {
	question: "What was the name of Gilfoyle's server?",
	answers: {
		a: "Antonio",
		b: "Artemus",
		c: "Anton",
		d: "Android"
	},
	correctAnswer: "c"
}, {
	question: "What type of company did Keenan Feldspar have?",
	answers: {
		a: "Virtual Reality",
		b: "Augmented Reality",
		c: "Mixed Reality",
		d: "Artificial Intelligence"
	},
	correctAnswer: "a"
}, {
	question: `Who said, "I'm not one to gush, but the possibilities of your consequence-free reality are darkly promising."?`,
	answers: {
		a: "Gilfoyle",
		b: "Erlich",
		c: "Dinesh",
		d: "Richard"
	},
	correctAnswer: "a"
}, {
	question: "How much money did Peter Gregory offer students to drop out of college to pursue their dream?",
	answers: {
		a: "$1,000,000",
		b: "$250,000",
		c: "$500,000",
		d: "$100,000"
	},
	correctAnswer: "d"
}, {
	question: "What was Jared's title while working for Pied Piper?",
	answers: {
		a: "Chief Operating Officer",
		b: "Chief Financial Officer",
		c: "Head of Business Development",
		d: "Business Consultant"
	},
	correctAnswer: "c"
}, {
	question: "What school did Big Head start teaching at?",
	answers: {
		a: "University of San Francisco",
		b: "University of California, Berkeley",
		c: "San Jose State University",
		d: "Stanford University"
	},
	correctAnswer: "d"
}, {
	question: "What country did Gavin Belson travel to?",
	answers: {
		a: "Tibet",
		b: "Burma",
		c: "Bhutan",
		d: "Nepal"
	},
	correctAnswer: "a"
}, ];

function buildQuiz() {
	const output = [];
	myQuestions.forEach(
		(currentQuestion, questionNumber) => {
			const answers = [];
			for (letter in currentQuestion.answers) {
				answers.push(`<label>
					<input type= "radio" name= "question${questionNumber}" value="${letter}">
					${letter} : 
					${currentQuestion.answers[letter]}
					<label>`);
			}
			output.push(`<div class="slide">
				<div class="question"> ${currentQuestion.question} </div>
				<div class="answers"> ${answers.join('')} </div>
				</div>`);
		});
	quizContainer.innerHTML = output.join('');
}

function showResults() {
	const answerContainers = quizContainer.querySelectorAll('.answers');
	let numCorrect = 0;
	myQuestions.forEach((currentQuestion, questionNumber) => {
		const answerContainer = answerContainers[questionNumber];
		const selector = 'input[name=question' + questionNumber + ']:checked';
		const userAnswer = (answerContainer.querySelector(selector) || {}).value;
		if (userAnswer === currentQuestion.correctAnswer) {
			numCorrect++;
			answerContainers[questionNumber].style.color = 'lightgreen';
		} else {
			answerContainers[questionNumber].style.color = 'red';
		}
	});
	resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
}
let currentSlide = 0;

function showSlide(n) {
	slides[currentSlide].classList.remove('active-slide');
	slides[n].classList.add('active-slide');
	currentSlide = n;
	if (currentSlide === 0) {
		previousButton.style.display = 'none';
	} else {
		previousButton.style.display = 'inline-block';
	}
	if (currentSlide === slides.length - 1) {
		nextButton.style.display = 'none';
		submitButton.style.display = 'inline-block';
	} else {
		nextButton.style.display = 'inline-block';
		submitButton.style.display = 'none';
	}
}

function showNextSlide() {
	showSlide(currentSlide + 1);
}

function showPreviousSlide() {
	showSlide(currentSlide - 1);
}
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
//display Quiz
buildQuiz();
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
showSlide(0);
submitButton.addEventListener("click", showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);