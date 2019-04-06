$(document).ready(function () {
    // ----------------------------TRIVIA GAME----------------------------

    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unansweredQuestions = 0;
    var timeRemaining = 45;
    var intervalID;
    var indexQandA = 0; //index to load a different question each round without the game reset or screen refresh
    var answered = false; //variable to stop the timer if user has clicked an answer
    var correct;
    var triviaGame = [{
        question: "Who is the lead singer of Metallica?",
        answer: ["Chester Bennington", "Kurt Cobain", "James Hetfield", "Steven Tyler"],
        correct: "2"
    }, {
        question: "What year the song 'Smell like teen spirit' was released?",
        answer: ["1991", "1995", "1998", "1993"],
        correct: "0",
    }, {
        question: "The song 'Zombie' in year 1993 was released by:",
        answer: ["Korn", "Rob Zombie", "Pearl Jam", "The Cranberries"],
        correct: "3"
    }, {
        question: "Who is the lead singer of Korn?",
        answer: ["Anajil Roberts", "Jonathan Davis", "Corey Taylor", "Jonathan Davidson"],
        correct: "1"
    }, {
        question: "Which one is Nirvana's best selling album?",
        answer: ["Blew", "Silver", "Nevermind", "In Utero"],
        correct: "2"
    }, {
        question: "Who is the lead singer of Tool?",
        answer: ["Maynard Keenan", "Adam Jones", "Danny Carey", "Billy Howerdel"],
        correct: "0"
    }, {
        question: "Song 'The Diary of Jane' blongs to which band?",
        answer: ["Seether", "Breaking Benjamin", "Sevendust", "Trapt"],
        correct: "1"
    }, {
        question: "what year Kurt Cobain commited suicied?",
        answer: ["1991", "2000", "1991", "1994"],
        correct: "3"
    }];
    // ------------- FUNCTION DECLARATIONS ----------------------------


    function startGame() {
        $('.start-button').remove();
        correctAnswers = 0;
        incorrectAnswers = 0;
        unansweredQuestions = 0;
        loadQandA();
    }

    function loadQandA() {
        answered = false; // will allow timeRemaining to be pushed back to <h5> after round reset....else statement in function timer()
        timeRemaining = 45;
        intervalID = setInterval(timer, 1000);
        if (answered === false) {
            timer();
        }
        correct = triviaGame[indexQandA].correct;
        var question = triviaGame[indexQandA].question;
        $('.question').html(question);
        for (var i = 0; i < 4; i++) {
            var answer = triviaGame[indexQandA].answer[i];
            $('.answers').append('<h4 class= answersAll id=' + i + '>' + answer + '</h4>');
        }

        $("h4").click(function () {
            var id = $(this).attr('id');
            if (id === correct) {
                answered = true; // stops the timer
                $('.question').text("THE ANSWER IS: " + triviaGame[indexQandA].answer[correct]);
                correctAnswer();
            } else {
                answered = true; //stops the timer
                $('.question').text("YOU CHOSE: " + triviaGame[indexQandA].answer[id] + ".....BUT THE ANSWER IS: " + triviaGame[indexQandA].answer[correct]);
                incorrectAnswer();
            }
        });
    }

    function timer() {
        if (timeRemaining === 0) {
            answered = true;
            clearInterval(intervalID);
            $('.question').text("THE CORRECT ANSWER IS: " + triviaGame[indexQandA].answer[correct]);
            unAnswered();
        } else if (answered === true) {
            clearInterval(intervalID);
        } else {
            timeRemaining--;
            $('.timeRemaining').text('YOU HAVE ' + timeRemaining + ' SECONDS TO CHOOSE');
        }
    }

    function correctAnswer() {
        correctAnswers++;
        $('.timeRemaining').text("YOU HAVE ANSWERED CORRECTLY!").css({
            'color': '#3D414F'
        });
        resetRound();
    }

    function incorrectAnswer() {
        incorrectAnswers++;
        $('.timeRemaining').text("YOU HAVE ANSWERED INCORRECTLY!").css({
            'color': '#3D414F'
        });
        resetRound();

    }

    function unAnswered() {
        unansweredQuestions++;
        $('.timeRemaining').text("YOU FAILED TO CHOOSE AN ANSWER").css({
            'color': '#3D414F'
        });
        resetRound();
    }

    function resetRound() {
        $('.answersAll').remove();
        indexQandA++; // increments index which will load next question when loadQandA() is called again
        if (indexQandA < triviaGame.length) {
            setTimeout(function () {
                loadQandA();
            }, 5000); // removes answer image from previous round
        } else {
            setTimeout(function () {
                $('.question').remove();
                $('.timeRemaining').remove();
                $('.answers').append('<h4 class= answersAll end>CORRECT ANSWERS: ' + correctAnswers + '</h4>');
                $('.answers').append('<h4 class= answersAll end>INCORRECT ANSWERS: ' + incorrectAnswers + '</h4>');
                $('.answers').append('<h4 class= answersAll end>UNANSWERED QUESTIONS: ' + unansweredQuestions + '</h4>');
                setTimeout(function () {
                    location.reload();
                }, 7000);
            }, 5000);
        }
    };

    $('.startButton').on("click", function () {
        $('.startButton');
        startGame();

    });

});