/* 1. app loads and everything is set to zero.
   2. Once start button is clicked, the game is started and the first question appears in the center picture frame.
   3. The timer also begins and is located in the picture frame to the right.
   4. In the left picture frame, a clue will be revealed. 
   5. When the player selects an answer from the multiple choices, the game will output a response of Correct or Incorrect.
   6. The next question will appear without user input.
   7. At the end of the game, there will be a results display that shows correct answers, incorrect answers, and unanswered questions. There will also be a restart button.
   */


// Trivia question bank 

var triviaQuestions = [{
    question: "In 2017, this American Artist from Brooklyn, NY once known for his graffiti art sold a painting at Sotheby’s auction for $110 million dollars. The highest amount for any American artist ever." ,
    answerList: ["Jean-Michel Basquiat", "Andy Warhol", "Claude Monet", "Rembrandt"],
    answer: 0
},{
    question: "Who painted the Mona Lisa?",
    answerList: ["Vincent VanGogh", "Leonado DaVinci", "Frida Kahlo", "Diego Rivera"],
    answer: 1
    
},{
    question: "This American painter was a commanding figure of the Abstract Expressionist movement. Best known for his drip and splash style where he poured and dripped paint from a can onto the canvas.",
    answerList: ["Paul Cezanne","Pablo Picasso", "Piet Mondrian", "Jackson Pollack" ],
    answer: 3
},{
    question: "Who painted the Sistine chapel ceiling?",
    answerList: ["Henri Matisse", "Paul Klee", "Michelangelo", "Gustav Klimt"],
    answer: 2
    
},{
    question: "A term used to describe the various materials and methods of the artist.",
    answerList: ["artsy things", "medium", "art tools", "tint tool"], 
    answer: 1
},{
    question: "Originated by Picasso and Braque this movement in painting and sculpture was recognized as one of the great turning points in western art. African sculpture heavily influenced this movement.",
    answerList: ["Cubism", "Pointillism", "Realism", "Surrealism"],
    answer: 0
},{
    question: "Best known for his Pop Art silk-screened images of celebrities, this American artist started his career in NYC as a Fashion Illustrator.",
    answerList: ["Joesph Wright", "Andrew Wyeth", "Andy Warhol", "Franl Lloyd Wright"],
    answer: 2
},{
    question:"A form of art usually portraiture, in which features of the subject represented are distorted or exaggerated for comic effect.",
    answerList: ["Caricature", "Portrait", "Sculpture", "Cubism"],
    answer: 0
},{
    question: "Refers to the distances or areas around, between, and within components of a piece of art.",
    answerList: ["Line", "Form", "Space", "Shape"],
    answer: 2
},{
    question: "Girl with Balloon, a well known artwork by this London based artist self destructs by passing through a shredder installed in the bottom of the frame shortly after being sold at auction.",
    answerList: ["Georgia O'Keefe", "Banksy", "Joan Miro", "Kandinsky"],
    answer: 1
}];

var currentQuestion; var correctAnswer; var incorrectAnswer; var unanswered; var seconds; var time; var answered; var userSelect;

var messages = {
	correct: "Yes, that is correct!",
	incorrect: "No, that's not it.",
	endTime: "Your time is up!",
    finished: "Let's see how well you did..."
}



//Start Button Event
$('#startBtn').on('click', function(){
	$(this).hide();
	newGame();
});

//Start Over Button Event
$('#startOverBtn').on('click', function(){
	$(this).hide();
	newGame();
});

// New Game
function newGame(){
	$('#finalMessage').empty();
	$('#correctAnswers').empty();
	$('#incorrectAnswers').empty();
	$('#unanswered').empty();
	currentQuestion = 0;
	correctAnswer = 0;
	incorrectAnswer = 0;
	unanswered = 0;
	newQuestion();
}

function newQuestion(){
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#gif').empty();
    answered = true;
    
    //sets up new questions & answerList
	$('#currentQuestion').html('Question #'+(currentQuestion+1)+'/'+triviaQuestions.length);
	$('.question').html('<h4>' + triviaQuestions[currentQuestion].question + '</h4>');
	for(var i = 0; i < 4; i++){
		var choices = $('<div>');
		choices.text(triviaQuestions[currentQuestion].answerList[i]);
		choices.attr({'data-index': i });
		choices.addClass('thisChoice');
		$('.answerList').append(choices);
    }}
    
    countdown();
	//clicking an answer will pause the time and setup answerPage
	$('.thisChoice').on('click',function(){
		userSelect = $(this).data('index');
		clearInterval(time);
		answerPage();
    });
    
    function countdown(){
        seconds = 20;
        $('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
        answered = true;
        //sets timer to go down
        time = setInterval(showCountdown, 1000);
    }
    
    function showCountdown(){
        seconds--;
        $('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
        if(seconds < 1){
            // clearInterval(time);
            seconds=20;
            answered = false;
            currentQuestion++;
            answerPage();
            newQuestion();
        }
    }

    function answerPage(){
        $('#currentQuestion').empty();
        $('.thisChoice').empty(); //Clears question page
        $('.question').empty();
    }

    var rightAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
	var rightAnswerIndex = triviaQuestions[currentQuestion].answer;
    
    //checks to see correct, incorrect, or unanswered
	if((userSelect == rightAnswerIndex) && (answered == true)){
		correctAnswer++;
		$('#message').html(messages.correct);
	} else if((userSelect != rightAnswerIndex) && (answered == true)){
		incorrectAnswer++;
		$('#message').html(messages.incorrect);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
	} else{
		unanswered++;
		$('#message').html(messages.endTime);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
		answered = true;
	}
    
    if(currentQuestion == (triviaQuestions.length-1)){
		setTimeout(scoreboard, 5000)
	} else{
		currentQuestion++;
		setTimeout(newQuestion, 5000);
	}	
    function scoreboard(){
        $('#timeLeft').empty();
        $('#message').empty();
        $('#correctedAnswer').empty();
        $('#gif').empty();
    
        $('#finalMessage').html(messages.finished);
        $('#correctAnswers').html("Correct Answers: " + correctAnswer);
        $('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
        $('#unanswered').html("Unanswered: " + unanswered);
        $('#startOverBtn').addClass('reset');
        $('#startOverBtn').show();
        $('#startOverBtn').html('Start Over?');
    }

    