$(document).ready(function(){
    var question1 = {
        question: "Who is the lead singer of Metallica?",
        answers:[
            "<input type='radio'> Chester Bennington <br>",
            "<input type='radio'> Kurt Cobain <br>",
            "<input type='radio' data-correct='true'> James Hetfield <br>",
            "<input type='radio'> Steven Tyler <br>",
        ]
    };
    var question2 = {
        question: "What year the song 'Smell like teen spirit' was released?",
        answers:[
            "<input type='radio' data-correct='true'> 1991 <br>",
            "<input type='radio'> 1995 <br>",
            "<input type='radio'> 1998 <br>",
            "<input type='radio'> 1993 <br>",
        ]
    };
    var question3 = {
        question: "The song 'Zombie' in year 1993 was released by: ",
        answers:[
            "<input type='radio'> Korn <br>",
            "<input type='radio'> Rob Zombie <br>",
            "<input type='radio'> Pearl Jam <br>",
            "<input type='radio' data-correct='true'> The Cranberries <br>",
        ]
    };
    var question4 = {
        question: "Who is the lead singer of Korn?",
        answers:[
            "<input type='radio'> Anajil Roberts <br>",
            "<input type='radio' data-correct='true'> Jonathan Davis <br>",
            "<input type='radio'> Corey Taylor <br>",
            "<input type='radio'> Jonathan Davidson <br>",
        ]
    };
    var question5 = {
        question: "Which one is Nirvana's best selling album?",
        answers:[
            "<input type='radio'> Blew <br>",
            "<input type='radio'> Silver <br>",
            "<input type='radio' data-correct='true'> Nevermind <br>",
            "<input type='radio'> In Utero <br>",
        ]
    };
    var question6 = {
        question: "Who is the lead singer of Tool?",
        answers:[
            "<input type='radio' data-correct='true'> Maynard Keenan <br>",
            "<input type='radio'> Adam Jones <br>",
            "<input type='radio'> Danny Carey <br>",
            "<input type='radio'> Billy Howerdel <br>",
        ]
    };
    var question7 = {
        question: "Song 'The Diary of Jane' blongs to which band?",
        answers:[
            "<input type='radio'> Seether <br>",
            "<input type='radio' data-correct='true'> Breaking Benjamin <br>",
            "<input type='radio'> Sevendust <br>",
            "<input type='radio'> Trapt <br>",
        ]
    };
    var question8 = {
        question: "what year Kurt Cobain commited suicied?",
        answers:[
            "<input type='radio'> 1999 <br>",
            "<input type='radio'> 2000 <br>",
            "<input type='radio'> 1991 <br>",
            "<input type='radio' data-correct='true'> 1994 <br>",
        ]
    };
    var question9 = {
        question: "What year the band Tool was formed?",
        answers:[
            "<input type='radio'> 1997 <br>",
            "<input type='radio'> 1994 <br>",
            "<input type='radio' data-correct='true'> 1990 <br>",
            "<input type='radio'> 1995 <br>",
        ]
    };
    var question10 = {
        question: "The song '1979', released in 1995, blongs to what band?",
        answers:[
            "<input type='radio' data-correct='true'> The Smashing Pumpkins <br>",
            "<input type='radio'> Radiohead <br>",
            "<input type='radio'> Arcade Fire <br>",
            "<input type='radio'> Coldplay <br>",
        ]
    };


    var bank = [question1,question2,question3,question4,question5,question6,question7,question8,question9,question10];
    var number = 60;
    var intervalId;
    var qCount = 0;
    var wins = 0;
    var losses = 0;

    




})