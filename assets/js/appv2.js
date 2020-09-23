/* 1. app loads and everything is set to zero.
   2. Once start button is clicked, the game is started and the first question appears in the center picture frame.
   3. The timer also begins and is located in the picture frame to the right.
   4. In the left picture frame, a clue will be revealed. 
   5. When the player selects an answer from the multiple choices, the game will output a response of Correct or Incorrect.
   6. The next question will appear without user input.
   7. At the end of the game, there will be a results display that shows correct answers, incorrect answers, and unanswered questions. There will also be a restart button.
   */
  var card = $("#quiz-area");
  var countStartNumber = 30;

// Trivia question bank 

var questions = [{
    question: "In 2017, this American Artist from Brooklyn, NY once known for his graffiti art sold a painting at Sotheby’s auction for $110 million dollars. The highest amount for any American artist ever." ,
    answers: ["Jean-Michel Basquiat", "Andy Warhol", "Claude Monet", "Rembrandt"],
    correctAnswer: "Jean-Michel Basquiat",
    image: "assets/images/basquiat.jpg"
},{
    question: "Who painted the Mona Lisa?",
    answers: ["Vincent VanGogh", "Leonado DaVinci", "Frida Kahlo", "Diego Rivera"],
    correctAnswer: "Leonado DaVinci",
    image: "assets/images/monalisa.jpg"
    
},{
    question: "This American painter was a commanding figure of the Abstract Expressionist movement. Best known for his drip and splash style where he poured and dripped paint from a can onto the canvas.",
    answers: ["Paul Cezanne","Pablo Picasso", "Piet Mondrian", "Jackson Pollack" ],
    correctAnswer: "Jackson Pollack",
    image: "assets/images/jpollack.jpg"
},{
    question: "Who painted the Sistine chapel ceiling?",
    answers: ["Henri Matisse", "Paul Klee", "Michelangelo", "Gustav Klimt"],
    correctAnswer: "Michelangelo",
    image: "assets/images/sistine.png"
    
},{
    question: "A term used to describe the various materials and methods of the artist.",
    answers: ["artsy things", "medium", "art tools", "tint tool"], 
    correctAnswer: "medium",
    image: "assets/images/thinkinghomer.png"
},{
    question: "Originated by Picasso and Braque this movement in painting and sculpture was recognized as one of the great turning points in western art. African sculpture heavily influenced this movement.",
    answers: ["Cubism", "Pointillism", "Realism", "Surrealism"],
    correctAnswer: "Cubism",
    image: "assets/images/cubism.jpg"
},{
    question: "Best known for his Pop Art silk-screened images of celebrities, this American artist started his career in NYC as a Fashion Illustrator.",
    answers: ["Joesph Wright", "Andrew Wyeth", "Andy Warhol", "Franl Lloyd Wright"],
    correctAnswer: "Andy Warhol",
    image: "assets/images/orangeprince.jpg"
},{
    question:"A form of art usually portraiture, in which features of the subject represented are distorted or exaggerated for comic effect.",
    answers: ["Caricature", "Portrait", "Sculpture", "Cubism"],
    correctAnswer: "Caricature",
    image: "assets/images/thinkinghomer.png"
},{
    question: "Refers to the distances or areas around, between, and within components of a piece of art.",
    answers: ["Line", "Form", "Space", "Shape"],
    correctAnswer: "Space",
    image: "assets/images/thinkinghomer.png"
},{
    question: "Girl with Balloon, a well known artwork by this London based artist self destructs by passing through a shredder installed in the bottom of the frame shortly after being sold at auction.",
    answers: ["Georgia O'Keefe", "Banksy", "Joan Miro", "Kandinsky"],
    correctAnswer: "Banksy",
    image: "assets/images/girlwithballoon.jpg"
}];

// Variable to hold our setInterval
var timer;


$('#startBtn').on('click', function(){
	$(this).hide();

    countdown();
    
});

var game = {

  questions: questions,
  currentQuestion: 0,
  counter: countStartNumber,
  correct: 0,
  incorrect: 0,

  countdown: function() {
    game.counter--;
    $("#timeleft").text(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.timeUp();
    }
  },

  loadQuestion: function() {

    timer = setInterval(game.countdown, 1000);

    card.html("<h2>" + questions[this.currentQuestion].question + "</h2>");

    for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
      card.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i]
      + "'>" + questions[this.currentQuestion].answers[i] + "</button>");
      
    }
  },

  nextQuestion: function() {
    game.counter = countStartNumber;
    $("#timeleft").text(game.counter);
    game.currentQuestion++;
    game.loadQuestion();
  },

  timeUp: function() {

    clearInterval(timer);

    $("#timeleft").html(game.counter);

    card.html("<h2>Out of Time!</h2>");
    card.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer);
    card.append("<img src='" + questions[this.currentQuestion].image + "' />");

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 3 * 1000);
    }
    else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },

  results: function() {

    clearInterval(timer);

    card.html("<h2>All done, heres how you did!</h2>");

    $("#timeleft").text(game.counter);

    card.append("<h3>Correct Answers: " + game.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
    card.append("<h3>Unanswered: " + (questions.length - (game.incorrect + game.correct)) + "</h3>");
    card.append("<br><button id='start-over'>Start Over?</button>");
  },

  clicked: function(e) {
    clearInterval(timer);
    if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
      this.answeredCorrectly();
    }
    else {
      this.answeredIncorrectly();
    }
  },

  answeredIncorrectly: function() {

    game.incorrect++;

    clearInterval(timer);

    card.html("<h2>Nope!</h2>");
    card.append("<h3>The Correct Answer was: " + questions[game.currentQuestion].correctAnswer + "</h3>");
    card.append("<img src='" + questions[game.currentQuestion].image + "' />");

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 3 * 1000);
    }
    else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },

  answeredCorrectly: function() {

    clearInterval(timer);

    game.correct++;

    card.html("<h2>Correct!</h2>");
    card.append("<img src='" + questions[game.currentQuestion].image + "' />");

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 3 * 1000);
    }
    else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },

  reset: function() {
    this.currentQuestion = 0;
    this.counter = countStartNumber;
    this.correct = 0;
    this.incorrect = 0;
    this.loadQuestion();
  }
};

// CLICK EVENTS

$(document).on("click", "#start-over", function() {
  game.reset();
});

$(document).on("click", ".answer-button", function(e) {
  game.clicked(e);
});

$(document).on("click", "#startBtn", function() {
  $("#sub-wrapper").prepend("<h1>Time Remaining: <span id='counter-number'>30</span> Seconds</h1>");
  game.loadQuestion();
});


    