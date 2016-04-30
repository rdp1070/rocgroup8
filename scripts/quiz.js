var influencees = [];
var questions = [];
var answers = [];
var questionValue, answers_div;
var currentNum = 0;

/*jslint browser: true*/
/*global $, jQuery, alert*/

/*
* Load in the influences from and external JSON file
*/
function loadInfluences() {
    'use strict';
    var xhr = new XMLHttpRequest(),
        url = "scripts/json/tempArtists.json";
    xhr.onload = function () {
        // JSON.parse() converts a string to JSON. 
        var myJSON = JSON.parse(xhr.responseText),
            allInfluencees = myJSON.influencees,
            i;
        for (i = 0; i < allInfluencees.length; i += 1) {
            influencees[i] = allInfluencees[i];
        }
    };
    
    xhr.open('GET', url, true);
    xhr.send();
}

/*
* Compare the artists genres and influences to the answers
*/
function setArtist() {
    'use strict';
    
    // check to make sure the influencees are populated
    // and that the answers have been seleceted. 
    var i, j, x, cur_artist;
    if (influencees.length > 0 && answers.length > 0) {
        for (i = 0; i < influencees.length; i += 1) {
            influencees[i].score = 0;
            for (j = 0; j < answers.length; j += 1) {

                if (influencees[i].genre === answers[j]) {
                    influencees[i].score += 1;
                } else if (influencees[i].influencers === answers[j]) {
                    influencees[i].score += 1;
                }
            }// end answers loop
        }// end influencees loop
    }// end if 

    // check each artist, if the artist has a higher score
    // than the current artist up for selection.
    cur_artist = influencees[0];
    for (x = 0; x < influencees.length; x += 1) {
        if (influencees[x].score > cur_artist.score) {
            cur_artist = influencees[x];
        }
    }
    
    // print out the current artist in the console.
    // console.log(cur_artist.artist);
    // answers_div.innerHTML = cur_artist.artist;
}


/*
* change all the info for the Question
*/
function changeQuestion(qNum) {
    'use strict';
    answers_div.innerHTML = "";
    if (questions[qNum]) {
        questionValue.innerHTML = questions[qNum].txt;
        var i;
        //console.log(questions[qNum].answers.length);
        
        for (i = 0; i < questions[qNum].answers.length; i += 1) {
            answers_div.innerHTML += "<button class=\"answer\" id = \"a" + i + "\">" + questions[qNum].answers[i].txt + "</button>";
        }
       /* answers_div.querySelectorAll(".answer").onclick = function (e) {
            currentNum += 1;
            changeQuestion(currentNum);
        };*/
         // set up the onclick function for all button.answers 
        $(document).ready(function () {
            $('button.answer').click(function () {
                currentNum += 1;
                changeQuestion(currentNum);
            });
        });
        
    } else {
        setArtist();
    }
}


/*
* Enter Animation
*/
function enterAnim() {
    'use strict';
    $(document).ready(function () {
        $("#answer").stop().animate({top : "100%"}, 500);
    });
}

/*
* Load in the Questions and Answers from and external JSON file
*/
function loadQuestions() {
    'use strict';
    var xhr, url;
    xhr = new XMLHttpRequest();
    url = "scripts/json/questions.json";
    xhr.onload = function () {
        // JSON.parse() converts a string to JSON. 
        var myJSON = JSON.parse(xhr.responseText),
            allQuestions = myJSON.questions,
            i;
        for (i = 0; i < allQuestions.length; i += 1) {

            questions[i] = allQuestions[i];
        }
        //Initialize first question
        changeQuestion(0);
    };
    
    xhr.open('GET', url, true);
    xhr.send();

}

function init() {
    'use strict';
    //load in the influences, questions and enterAnimations.
    loadInfluences();
    loadQuestions();
    enterAnim();
    var individual_answers, i;
    
    questionValue = document.querySelector("#questionTitle");
    answers_div = document.querySelector("#answers");
    individual_answers = answers_div.querySelectorAll(".answer");
    for (i = 0; i < individual_answers.length; i += 1) {
        answers.push(individual_answers[i].innerHTML);
        changeQuestion(currentNum);
    }
    //changeQuestion(1);	
}

window.onload = init;