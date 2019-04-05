$(document).ready(function(){
    var question1 = {
        question: "Who is the lead singer of Metallica?",
        answers:[
            "<div class='choices btn btn-primary'> Chester Bennington </div><br>",
            "<div class='choices btn btn-primary'> Kurt Cobain </div><br>",
            "<div class='choices btn btn-primary' data-correct='true'> James Hetfield </div><br>",
            "<div class='choices btn btn-primary'> Steven Tyler </div><br>",
        ]
    };
    var question2 = {
        question: "What year the song 'Smell like teen spirit' was released?",
        answers:[
            "<div class='choices btn btn-primary' data-correct='true'> 1991 </div><br>",
            "<div class='choices btn btn-primary'> 1995 </div><br>",
            "<div class='choices btn btn-primary'> 1998 </div><br>",
            "<div class='choices btn btn-primary'> 1993 </div><br>",
        ]
    };
    var question3 = {
        question: "The song 'Zombie' in year 1993 was released by: ",
        answers:[
            "<div class='choices btn btn-primary'> Korn </div><br>",
            "<div class='choices btn btn-primary'> Rob Zombie </div><br>",
            "<div class='choices btn btn-primary'> Pearl Jam </div><br>",
            "<div class='choices btn btn-primary' data-correct='true'> The Cranberries </div><br>",
        ]
    };
    var question4 = {
        question: "Who is the lead singer of Korn?",
        answers:[
            "<div class='choices btn btn-primary'> Anajil Roberts </div><br>",
            "<div class='choices btn btn-primary' data-correct='true'> Jonathan Davis </div><br>",
            "<div class='choices btn btn-primary'> Corey Taylor </div><br>",
            "<div class='choices btn btn-primary'> Jonathan Davidson </div><br>",
        ]
    };
    var question5 = {
        question: "Which one is Nirvana's best selling album?",
        answers:[
            "<div class='choices btn btn-primary'> Blew </div><br>",
            "<div class='choices btn btn-primary'> Silver </div><br>",
            "<div class='choices btn btn-primary' data-correct='true'> Nevermind </div><br>",
            "<div class='choices btn btn-primary'> In Utero </div><br>",
        ]
    };
    var question6 = {
        question: "Who is the lead singer of Tool?",
        answers:[
            "<div class='choices btn btn-primary' data-correct='true'> Maynard Keenan </div><br>",
            "<div class='choices btn btn-primary'> Adam Jones </div><br>",
            "<div class='choices btn btn-primary'> Danny Carey </div><br>",
            "<div class='choices btn btn-primary'> Billy Howerdel </div><br>",
        ]
    };
    var question7 = {
        question: "Song 'The Diary of Jane' blongs to which band?",
        answers:[
            "<div class='choices btn btn-primary'> Seether </div><br>",
            "<div class='choices btn btn-primary' data-correct='true'> Breaking Benjamin </div><br>",
            "<div class='choices btn btn-primary'> Sevendust </div><br>",
            "<div class='choices btn btn-primary'> Trapt </div><br>",
        ]
    };
    var question8 = {
        question: "what year Kurt Cobain commited suicied?",
        answers:[
            "<div class='choices btn btn-primary'> 1999 </div><br>",
            "<div class='choices btn btn-primary'> 2000 </div><br>",
            "<div class='choices btn btn-primary'> 1991 </div><br>",
            "<div class='choices btn btn-primary' data-correct='true'> 1994 </div><br>",
        ]
    };
    var question9 = {
        question: "What year the band Tool was formed?",
        answers:[
            "<div class='choices btn btn-primary'> 1997 </div><br>",
            "<div class='choices btn btn-primary'> 1994 </div><br>",
            "<div class='choices btn btn-primary' data-correct='true'> 1990 </div><br>",
            "<div class='choices btn btn-primary'> 1995 </div><br>",
        ]
    };
    var question10 = {
        question: "The song '1979', released in 1995, blongs to what band?",
        answers:[
            "<div class='choices btn btn-primary' data-correct='true'> The Smashing Pumpkins </div><br>",
            "<div class='choices btn btn-primary'> nonehead </div><br>",
            "<div class='choices btn btn-primary'> Arcade Fire </div><br>",
            "<div class='choices btn btn-primary'> Coldplay </div><br>",
        ]
    };


    var bank = [question1,question2,question3,question4,question5,question6,question7,question8,question9,question10];
    var number = 60;
    var intervalId;
    var qCount = 0;
    var wins = 0;
    var losses = 0;

    $('#start').click(start);
    $('#restart').click(start)
    $('#questions-panel').css('display', 'none');
    $('#results-panel').css('display', 'none')


    function start() {
        number = 60;
        qCount = 0;
        wins = 0;
        losses = 0;

        $('#choices').empty();
        $('#start-panel').css('display', 'none');
        $('#questions-panle').css('display', 'inherit');
        $('#results-panel').css('display', 'none');

        showQuestion(qCount);
        //timer();
    }

    function showQuestion() {
        var questionObj = bank[qCount];
        $('#question').html(questionObj.question);

        for (var i = 0; i < questionObj.answers.length; i++) {
           $('#choices').append(questionObj.answers[i]);
        }
        check();
    }

    function check() {
        
    }

})