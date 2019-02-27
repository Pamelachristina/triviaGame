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

//app loads and everything is set to zero
$(document).ready(function(){
    currentQuestion = 0;
	correctAnswer = 0;
	incorrectAnswer = 0;
    unanswered = 0;
    $('#finalMessage').empty();
	$('#correctAnswers').empty();
	$('#incorrectAnswers').empty();
    $('#unanswered').empty();
)};
    
    

    var currentQuestion; var correctAnswer; var incorrectAnswer; var unanswered; var seconds; var time; var answered; var userSelect; var answerList;    





    