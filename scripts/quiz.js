var influencees = [];
var questions = [];
var answers = [];
var questionValue, answers_div;
var currentNum = 0;
var piName, cur_artist;
var state = "start";

/*jslint browser: true*/
/*global $, jQuery, alert*/

/*
* Load in the influences from and external JSON file
*/
function loadInfluences() {
    'use strict';
    // load in the tempArists.json
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
    
    questionValue.innerHTML = "";
    enterAnim();
    // if the genre they picked is the same as the artist genre
    // set that artist to be the current artist. 
    var x;
    for (x = 0; x < influencees.length; x += 1) {
        if (influencees[x].genre === answers[0]) {
            cur_artist = influencees[x];
        }
    }
    
    // DOM Injection. Read the string as HTML, allowing us to perfectly put in our data.
    answers_div.innerHTML = "<div id=\"syncButton\" onclick =\"sync()\"><img src=\"media/quiz/sync.png\"></div>";
    answers_div.innerHTML += "<img id=\"artist\" src=\"media/quiz/"+cur_artist.artist+".png\">";
    answers_div.innerHTML += "<img id=\"artistBlock\" src=\"media/quiz/artistBlock.png\">";
    answers_div.innerHTML += "<span class=\"answer\" style = \"box-shadow:0 0 0 0\"></span>";
    
    //Make a call upon the loadArtist.php script and send the current artist and pi name
    $.ajax({
        data: 'artist=' + cur_artist.id + '&pi=' + piName,
        url: 'scripts/loadArtist.php',
        method: 'POST',
        success: function (msg) {
            //console.log(msg);
        }
    });
}

/*
* Enter Animation
*/
function enterAnim() {
    'use strict';
    var dir = -1;
    // when the document is ready, if the state is artist fade away
    $(document).ready(function () {
        if (state === "artist") {
            $('#answers').fadeTo(600, 1);
        }
        // for each of the items with class answer
        // have them animate from the top or bottom depending on their position
        // ending in the middle, just offset.
        $.each($('.answer'), function (index) {
            $(this).animate({top: "+=" + 700 * dir + "px"}, 700, 'swing', function () {
                // this stuff happens when the animation is over
                $(this).css('top', (dir * 10) + 'px');
                dir *= -1;
            });
            dir *= -1;
        });
    });
}

/*
/ Exit Animation
*/
function exitAnim() {
    'use strict';
    var dir = -1;
    $(document).ready(function () {
        // After the answer is submitted come here
        // Slide the items with class answer off of the screen.
        $.each($('.answer'), function (index) {
            $(this).animate({top: "+=" + 700 * dir + "px"}, 700, 'swing', function () {
                // this stuff happens when the animation is over
                if (state === "artist"){
                    setArtist();
                } else {
                    changeQuestion(currentNum);
                }
            });
            dir *= -1;
        });
    });
}

// The functions that get called onClick of the first screen answers.
// These change states depending on the one that is called. 
function stateQ() {
    state = "questions";
    exitAnim();
    //changeQuestion(0);
}

function stateS() {
    state = "select";
    exitAnim();
    //changeQuestion(0);
}

function stateA() {
    // set the state to artist
    state = "artist";
    // generate a random number to be the artsit
    var rand = Math.floor(Math.random()*3);
    // grab the info of that random aritst
    answers[0] = questions[0].answers[rand].txt;
    // play the exit animation, which also calls the next question or sets the Artist
    exitAnim();
}

/*
* change all the info for the Question
*/
function changeQuestion(qNum) {
    'use strict';
    if (qNum < 0) {
        qNum = 0;
        currentNum = 0;
    }
    
    // Big if section that determines what changeQuestion does based on 
    // which state the thing is currently in.
    
    if (state === "questions") {
       
        // clear the div. If you don't it will weirdly double up.
        answers_div.innerHTML = "";
        if (questions[qNum]) {
            // the questions innerHTML is injected with the text of the appropriate question.
            questionValue.innerHTML = questions[qNum].txt;
            var i, x, div_holder;
            
            // for each answer in the json, make anew answer item
            for (i = 0; i < questions[qNum].answers.length; i += 1) {
                // make a button with an image tag inside of it. 
                // the image should have a source that is stored in the json.
                answers_div.innerHTML += "<img class=\"answer\" onclick=\"goForward(" + i + ")\" src = \"" +  questions[qNum].answers[i].img + "\"></img>";

            }
            
            // this is so I don't have to cal jquery everytime I want to get things 
            // involving the answers.
            div_holder = document.querySelectorAll(".answer");
            // for each one, make sure that the width is proper depending on the amount of answers.
            for (x = 0; x < div_holder.length; x += 1) {
                if (x % 2 === 1) {
                    div_holder[x].setAttribute("style", "top: -710px; max-width:" + 100 / questions[qNum].answers.length + "%;");
                } else {
                    div_holder[x].setAttribute("style", "top: 710px; max-width:" + 100 / questions[qNum].answers.length + "%;");
                }
            }
            // enter anim takes -1 as direction.
            enterAnim();
        } else {
            // this calls the dummy function that doesn't really do anything rn.
            setArtist();
        }// last line of questions
    } else if (state === "select") {
        answers_div.innerHTML = "";
        questionValue.innerHTML = "Pick and Artist";
         
        // DOM Injection. Use this to jam in strings to be read as HTML.
        answers_div.innerHTML += "<img class=\"answer\" onclick=\"(function(){answers[0] = questions[0].answers[0].txt; setArtist();})();\" src = \"media/quiz/beyoncebg.png\"></img>";
        answers_div.innerHTML += "<img class=\"answer\" onclick=\"(function(){answers[0] = questions[0].answers[1].txt; setArtist();})();\" src = \"media/quiz/brunobg.png\"></img>";
        answers_div.innerHTML += "<img class=\"answer\" onclick=\"(function(){answers[0] = questions[0].answers[2].txt; setArtist();})();\" src = \"media/quiz/foobg.png\"></img>";
        
        // for each one, make sure that the width is proper depending on the amount of answers.
        div_holder = document.querySelectorAll(".answer");
        for (x = 0; x < div_holder.length; x += 1) {
                if (x % 2 === 1) {
                    div_holder[x].setAttribute("style", "top: -710px; max-width:" + 100 / 3 + "%;");
                } else {
                    div_holder[x].setAttribute("style", "top: 710px; max-width:" + 100 / 3 + "%;");
                }
            }
            // enter anim takes -1 as direction.
            enterAnim();
    } else if (state === "start") {
        answers_div.innerHTML = "";
        questionValue.innerHTML = "";
         
        // This section is fucky, continue working on it. 
        answers_div.innerHTML += "<img class=\"answer\" onclick=\"stateQ()\" src = \"media/quiz/discover.png\"></img>";
        answers_div.innerHTML += "<img class=\"answer\" onclick=\"stateS()\" src = \"media/quiz/select.png\"></img>";
        answers_div.innerHTML += "<img class=\"answer\" onclick=\"stateA()\" src = \"media/quiz/random.png\"></img>";
        
        div_holder = document.querySelectorAll(".answer");
        for (x = 0; x < div_holder.length; x += 1) {
                if (x % 2 === 1) {
                    div_holder[x].setAttribute("style", "top: -710px; max-width:" + 100 / 3 + "%;");
                } else {
                    div_holder[x].setAttribute("style", "top: 710px; max-width:" + 100 / 3 + "%;");
                }
            }
            // enter anim takes -1 as direction.
            enterAnim();
    } 
}

// click the button
function goForward(num) {
    'use strict';
    exitAnim();
    answers[currentNum] = questions[0].answers[num].txt;
    currentNum += 1;
    
}


// go back one question
function goBack() {
    'use strict';
    if(state === "select" || state === "artist" || currentNum == 0) {
        state = "start";
        currentNum = 0;
        // normally exitAnim goes back for you, but if there is no .answer
        // then it won't go back.
        exitAnim();
    } else {
        exitAnim();
        currentNum -= 1;
    }
}

// sync the stuf{f
function sync() {
    'use strict';
    $.getJSON("scripts/json/tempArtists.json", function (data) {
        //console.log(data);
        var curArt = cur_artist.id;
      
        data.currentArtist = curArt;
        //console.log(data.currentArtist);
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

//Set pi name for the rest of the file to use, needed for setArtist
function getPi(pi) {
    'use strict';
    piName = pi;
}

function init() {
    'use strict';
    //load in the influences, questions and enterAnimations.
    loadInfluences();
    loadQuestions();
    var individual_answers, i;
    
    // use querySelectors to get the appropriate page elements
    questionValue = document.querySelector("#questionTitle");
    answers_div = document.querySelector("#answers");
    individual_answers = answers_div.querySelectorAll(".answer");
}

window.onload = init;