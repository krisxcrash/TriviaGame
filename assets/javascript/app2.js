const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
    {
        question: `Who said, "My username is 'password' and my password is 'password'"?`,
        answers: {
            a: "Jared",
            b: "Big Head",
            c: "Erlich",
            d: "Dinesh"
        },
        correctAnswer: "b"
    },
    {
        question: "What was the name of the application that Pied Piper sold to Hooli?",
        answers: {
            a: "Pied Piper Chat",
            b: "Piper Connect",
            c: "Pied Messenger",
            d: "Piper Chat"
        },
        correctAnswer: "d"
    },
    {
        question: "Who created the SeeFood application, Not Hotdog?",
        answers: {
            a: "Jin Yang",
            b: "Erlich",
            c: "Richard",
            d: "Gilfoyle"
        },
        correctAnswer: "a"
    },
    {
        question: "What was the name of Gilfoyle's server?",
        answers: {
            a: "Antonio",
            b: "Artemus",
            c: "Anton",
            d: "Android"
        },
        correctAnswer: "c"
	},
	{
        question: "What type of company did Keenan Feldspar have?",
        answers: {
            a: "Virtual Reality",
            b: "Augmented Reality",
            c: "Mixed Reality",
            d: "Artificial Intelligence"
        },
        correctAnswer: "a"
	},
	{
        question: `Who said, "I'm not one to gush, but the possibilities of your consequence-free reality are darkly promising."?`,
        answers: {
            a: "Gilfoyle",
            b: "Erlich",
            c: "Dinesh",
            d: "Richard"
        },
        correctAnswer: "a"
	},
	{
        question: "How much money did Peter Gregory offer students to drop out of college to pursue their dream?",
        answers: {
            a: "$1,000,000",
            b: "$250,000",
            c: "$500,000",
            d: "$100,000"
        },
        correctAnswer: "d"
	},
	{
        question: "What was Jared's title while working for Pied Piper?",
        answers: {
            a: "Chief Operating Officer",
            b: "Chief Financial Officer",
            c: "Head of Business Development",
            d: "Business Consultant"
        },
        correctAnswer: "c"
	},
	{
        question: "What school did Big Head start teaching at?",
        answers: {
            a: "University of San Francisco",
            b: "University of California, Berkeley",
            c: "San Jose State University",
            d: "Stanford University"
        },
        correctAnswer: "d"
	},
	{
        question: "What country did Gavin Belson travel to?",
        answers: {
            a: "Tibet",
            b: "Burma",
            c: "Bhutan",
            d: "Nepal"
        },
        correctAnswer: "a"
	},
]

function buildQuiz() {
	const output = [];

	myQuestions.forEach(
		(currentQuestion, questionNumber) => {
			const answers = [];

			for(letter in currentQuestion.answers) {
				answers.push(
					`<label>
					<input type= "radio" name= "question${questionNumber}" value="${letter}">
					${letter} : 
					${currentQuestion.answers[letter]}
					<label>`
				);
			}

			output.push(
				`<div class="question"> ${currentQuestion.question} </div>
				<div class="answers"> ${answers.join('')} </div>`
			);
		}
	);

	quizContainer.innerHTML = output.join('');
}

function showResults() {

}

//display Quiz
buildQuiz();

//show results on submit
submitButton.addEventListener('click', showResults);

