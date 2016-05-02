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
    
    // if the genre they picked is the same as the artist genre
    // set that artist to be the current artist. 
    var x, cur_artist;
    for (x = 0; x < influencees.length; x += 1) {
        if (influencees[x].genre === answers[0]) {
            cur_artist = influencees[x];
        }
    }
    
    // print out the current artist in the console.
    // console.log(cur_artist.artist);
    answers_div.innerHTML = cur_artist.artist;
    
    console.log(cur_artist.artist);
    
    $.getJSON("scripts/json/tempArtists.json", function(data){
      //console.log(data);
      var curArt = cur_artist.id;
      
      data.currentArtist = curArt;
      console.log(data.currentArtist); 
    });
}


/*
* change all the info for the Question
*/
function changeQuestion(qNum) {
    'use strict';
    answers_div.innerHTML = "";
    if (qNum < 0) {
        qNum = 0;
        currentNum = 0;
    }
    if (questions[qNum]) {
        questionValue.innerHTML = questions[qNum].txt;
        var i, x, div_holder;
        //console.log(questions[qNum].answers.length);
        
        for (i = 0; i < questions[qNum].answers.length; i += 1) {
            // make a button with an image tag inside of it. 
            // the image should have a source that is stored in the json.
            answers_div.innerHTML += "<input type=\"image\" \"class=\"answer\" onclick=\"goForward(" + i + ")\" src=\""  +  questions[qNum].answers[i].img + "\"></input>";
        }
        
        div_holder = document.querySelectorAll("input");
        for (x = 0; x < div_holder.length; x += 1) {
            if (x % 2 === 1) {
                div_holder[x].setAttribute("top", "-100%");
            } else {
                div_holder[x].setAttribute("top", "+100%");
            }
        }
        
    } else {
        // this calls the dummy function that doesn't really do anything rn.
        setArtist();
    }
}

// click the button
function goForward(num) {
    'use strict';
    answers[currentNum] = questions[0].answers[num].txt;
    currentNum += 1;
    changeQuestion(currentNum);
    
}


// go back one question
function goBack() {
    'use strict';
    currentNum -= 1;
    changeQuestion(currentNum);
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
    //changeQuestion(1);	
}

window.onload = init;