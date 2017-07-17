// var questions= [{
// 	question: "What was the first high level programming language developed for a computer?",
// 	choices: ["HTML", "Plankalkül", "CSS", "Java"],
// 	correctAnswer: 1
// }, {
// 	question: "When was Plankalkül created?",
// 	choices: ["Between 1971 and 1973", "Between 1964 and 1966", "Between 1943 and 1945", "Between 1980 and 1982"],
// 	correctAnswer: 2
// }, {
// 	question: "When was JavaScript created?",
// 	choices: ["May 1995", "July 1993", "October 2001", "January 1996"],
// 	correctAnswer: 0
// }, {
// 	question: "Who was JavaScript created by?",
// 	choices: ["Brandon Eight", "Eric Brand", "Gordon Smith", "Brendan Eich"],
// 	correctAnswer: 3
// }, {
// 	question: "What was JavaScript's original name?",
// 	choices: ["Vanilla", "Mocha", "Carmel", "Java"],
// 	correctAnswer: 3
// }, {
// 	question: "How long did it take to create JavaScript?",
// 	choices: ["3 months", "10 days", "1 year", "10 years"],
// 	correctAnswer: 1
// },{
// 	question: "Who coined the term Ajax?",
// 	choices: ["Jesse James Garrett", "John Paul Jefferson", "Sam Jacob Wills", "William Zach Cobb"],
// 	correctAnswer: 0
// },{
// 	question: "When was jQuery originally released?",
// 	choices: ["June 2002", "February 2004", "January 2006", "December 2009"],
// 	correctAnswer: 2
// },{
// 	question: "Who was the original author of jQuery?",
// 	choices: ["John Resig", "Phillip Knight", "David Walsh", "Ted Mosby"],
// 	correctAnswer: 0
// }, {
// 	question: "Which license is jQuery under?",
// 	choices: ["Harvard", "Facebook", "Twitter", "MIT"],
// 	correctAnswer: 3
// }];

$(function(){ 

	var progress = $('#progress'), 
	    progressKeeper = $('#progressKeeper'), 
	    notice = $("#notice"), 
	    progressWidth = 548, 
	    answers= kroggy.answers, 
	    userAnswers = [], 
	    questionLength= answers.length, 
	    questionsStatus = $("#questionNumber") 
	    questionsList = $(".question");

	var kroggy = { answers: [ 'b', 'd', 'a', 'c', 'a', 'd', 'b', 'a', 'd', 'a', 'd', 'c', 'a', 'b', 'd' ] }

	function roundReloaded(num, dec) { 
	    var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec); 
	    return result; 
	}

	function judgeSkills(score) { 
    var returnString; 
        if (score==100) returnString = "Albus, is that you?"
        else if (score>90) returnString = "Outstanding, noble sir!"
        else if (score>70) returnString = "Exceeds expectations!"
        else if (score>50) returnString = "Acceptable. For a muggle."
        else if (score>35) returnString = "Well, that was poor."
        else if (score>20) returnString = "Dreadful!"
        else returnString = "For shame, troll!"
    return returnString; 
}

	function checkAnswers() { 
	    var resultArr = [],  
	                flag = false; 
	    for (i=0; i<answers.length; i++) { 
	        if (answers[i] == userAnswers[i]) { 
	            flag = true; 
	        } 
	        else { 
	            flag = false; 
	        } 
	        resultArr.push(flag); 
	    } 
	    return resultArr; 
	}

	$('.btnStart').click(function(){ 
    $(this).parents('.questionContainer').fadeOut(500, function(){ 
        $(this).next().fadeIn(500, function(){ progressKeeper.show(); }); 
    }); 
         return false; 
});

	$('.btnPrev').click(function(){ 
        notice.hide(); 
    $(this).parents('.questionContainer').fadeOut(500, function(){ 
        $(this).prev().fadeIn(500) 
    }); 
    progress.animate({ width: progress.width() - Math.round(progressWidth/questionLength), }, 500 ); 
         return false; 
});

	$('.btnNext').click(function(){ 
        var tempCheck = $(this).parents('.questionContainer').find('input[type=radio]:checked'); 
    if (tempCheck.length == 0) { 
         notice.fadeIn(300);return false; 
    } 
         notice.hide(); 
    $(this).parents('.questionContainer').fadeOut(500, function(){ 
        $(this).next().fadeIn(500); 
    }); 
    progress.animate({ width: progress.width() + Math.round(progressWidth/questionLength), }, 500 ); 
         return false; 
});

	$('.btnShowResult').click(function(){ 

			var tempCheck = $(this).parents('.questionContainer').find('input[type=radio]:checked'); 
		if (tempCheck.length == 0) { 
		     notice.fadeIn(300);return false; 
		} 
		var tempArr = $('input[type=radio]:checked'); 
		for (var i = 0, ii = tempArr.length; i < ii; i++) { 
		    userAnswers.push(tempArr[i].getAttribute('data-key')); 
		}

		progressKeeper.hide(); 
		var results = checkAnswers(),  
		    resultSet = '', 
		    trueCount = 0, 
		    answerKey = ' Answers <br />', 
		    score; 

		for (var i = 0, ii = results.length; i &lt; ii; i++){ 
	    if (results[i] == true) trueCount++; 
	    resultSet += '<div class="resultRow"> Question #' + (i + 1) + (results[i]== true ? "<div class='correct'><span>Correct</span></div>": "<div class='wrong'><span>Wrong</span></div>") + "</div>"; 
	    answerKey += (i+1) +" : "+ answers[i] +' &nbsp;  &nbsp;  &nbsp;   '; 
	} 
	score =  roundReloaded(trueCount / questionLength*100, 2);


	answerKey = "<div id='answer-key'>" + answerKey + "</div>"; 
		resultSet = '<h2 class="qTitle">' +judgeSkills(score) + ' You scored '+score+'%</h2>' + resultSet + answerKey; 
		$('#resultKeeper').html(resultSet).show(); 
		     $(this).parents('.questionContainer').fadeOut(500, function(){ 
		    $(this).next().fadeIn(500); 
		}); 
		return false;
});

		progressKeeper.hide(); 
		notice.hide(); 
		$("#main-quiz-holder input:radio").attr("checked", false);

		$('.answers li input').click(function() { 
    $(this).parents('.answers').children('li').removeClass("selected"); 
    $(this).parents('li').addClass('selected'); 
});

})