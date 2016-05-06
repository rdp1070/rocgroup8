"use strict"

// content is the div tagged ID on the html page
var content;
// state will change as app moves forward
//Cols will appear with info when totem is used
var state, leftCol, rightCol, artistName;

// html is the html that will be added to the page
var html;

// variables for the comparison artists
var a1, a2, a3;

// A string with the user's artist. 
var userArtist;

//Set up song and audio stuff
var song1, song2, song3, song4;
var audio1, audio2, audio3, audio4;
var oneIsPlaying, twoIsPlaying, threeIsPlaying, fourIsPlaying;
//CD songs
var song5, song6, song7, song8;
var audio5, audio6, audio7, audio8;
var fiveIsPlaying, sixIsPlaying, sevenIsPlaying, eightIsPlaying;

/*
* Set the variable to starting state and start the animation loop.
*/
function init() {
  
	html = "";
	content = document.querySelector("#content");
	state = document.querySelector("#state");
    leftCol = document.querySelector("#leftCol");
    rightCol = document.querySelector("#rightCol");
	artistName = document.querySelector("#artistName");
	
	//set up artist buttons
	a1 = document.querySelector("#a1");
	a1.onclick = setComparison;
	a2 = document.querySelector("#a2");
	a2.onclick = setComparison;
	a3 = document.querySelector("#a3");
	a3.onclick = setComparison;
    
    
    //Setting up audio
    audio1 = new Audio("media/era/Bruno Mars/songs/when_i_was_your_man.mp3");
    audio2 = new Audio("media/era/Bruno Mars/songs/treasure.mp3");
    audio3 = new Audio("media/era/Bruno Mars/songs/treasure.mp3");
    audio4 = new Audio("media/era/Bruno Mars/songs/treasure.mp3");
    //CD Audio
    audio5 = new Audio("media/era/Bruno Mars/songs/treasure.mp3");
    audio6 = new Audio("media/era/Bruno Mars/songs/treasure.mp3");
    audio7 = new Audio("media/era/Bruno Mars/songs/treasure.mp3");
    audio8 = new Audio("media/era/Bruno Mars/songs/treasure.mp3");
    
    //Setting up audio buttons
    song1 = document.querySelector("#song1");
    song1.onclick = function(){playTrack(audio1, 1)};
    song2 = document.querySelector("#song2");
    song2.onclick = function(){playTrack(audio2, 2)};
    song3 = document.querySelector("#song3");
    song3.onclick = function(){playTrack(audio3, 3)};
    song4 = document.querySelector("#song4");
    song4.onclick = function(){playTrack(audio4, 4)};
    //CD Audio buttons
    song5 = document.querySelector("#song5");
    song5.onclick = function(){playCDTrack(audio5, 5)};
    song6 = document.querySelector("#song6");
    song6.onclick = function(){playCDTrack(audio6, 6)};
    song7 = document.querySelector("#song7");
    song7.onclick = function(){playCDTrack(audio7, 7)};
    song8 = document.querySelector("#song8");
    song8.onclick = function(){playCDTrack(audio8, 8)};
}

/*
*  Plays audio for left side based on which button is clicked
*  Turns off all audio and resets times before playing
*  Sets values for visuals
*/
function playTrack(audio, num) {
    //Pause all CD songs
    audio5.pause();
    audio5.currentTime = 0;
    fiveIsPlaying = false;
    audio6.pause();
    audio6.currentTime = 0;
    sixIsPlaying = false;
    audio7.pause();
    audio7.currentTime = 0;
    sevenIsPlaying = false;
    audio8.pause();
    audio8.currentTime = 0;
    eightIsPlaying = false;
    //CD Visuals
    $(song5).fadeTo(600, 1);
    $(song6).fadeTo(600, 1);
    $(song7).fadeTo(600, 1);
    $(song8).fadeTo(600, 1);
    if (num == 1){
        if (oneIsPlaying){
            //Audio portion
            audio.pause();
            audio.currentTime = 0;
            oneIsPlaying = false;
            
            //Visual Portion
            $(song1).fadeTo(600, 1);
            $(song2).fadeTo(600, 1);
            $(song3).fadeTo(600, 1);
            $(song4).fadeTo(600, 1);
        } else {
            audio2.pause();
            audio2.currentTime = 0;
            twoIsPlaying = false;
            audio3.pause();
            audio3.currentTime = 0;
            threeIsPlaying = false;
            audio4.pause();
            audio4.currentTime = 0;
            fourIsPlaying = false;
            
            audio.play();
            oneIsPlaying = true;
            
            $(song1).fadeTo(600, .2);
            $(song2).fadeTo(600, 1);
            $(song3).fadeTo(600, 1);
            $(song4).fadeTo(600, 1);
        }
    } else if (num == 2){
        if (twoIsPlaying){
            audio.pause();
            audio.currentTime = 0;
            twoIsPlaying = false;
            
            $(song1).fadeTo(600, 1);
            $(song2).fadeTo(600, 1);
            $(song3).fadeTo(600, 1);
            $(song4).fadeTo(600, 1);
        } else {
            audio1.pause();
            audio1.currentTime = 0;
            oneIsPlaying = false;
            audio3.pause();
            audio3.currentTime = 0;
            threeIsPlaying = false;
            audio4.pause();
            audio4.currentTime = 0;
            fourIsPlaying = false;
            
            audio.play();
            twoIsPlaying = true;
            
            $(song1).fadeTo(600, 1);
            $(song2).fadeTo(600, .2);
            $(song3).fadeTo(600, 1);
            $(song4).fadeTo(600, 1);
        }
    } else if (num == 3){
        if (threeIsPlaying){
            audio.pause();
            audio.currentTime = 0;
            threeIsPlaying = false;
            
            $(song1).fadeTo(600, 1);
            $(song2).fadeTo(600, 1);
            $(song3).fadeTo(600, 1);
            $(song4).fadeTo(600, 1);
        } else {
            audio1.pause();
            audio1.currentTime = 0;
            oneIsPlaying = false;
            audio2.pause();
            audio2.currentTime = 0;
            twoIsPlaying = false;
            audio4.pause();
            audio4.currentTime = 0;
            fourIsPlaying = false;
            
            audio.play();
            threeIsPlaying = true;
            
            $(song1).fadeTo(600, 1);
            $(song2).fadeTo(600, 1);
            $(song3).fadeTo(600, .2);
            $(song4).fadeTo(600, 1);
        }
    } else if (num == 4){
        if (fourIsPlaying){
            audio.pause();
            audio.currentTime = 0;
            fourIsPlaying = false;
            
            $(song1).fadeTo(600, 1);
            $(song2).fadeTo(600, 1);
            $(song3).fadeTo(600, 1);
            $(song4).fadeTo(600, 1);
        } else {
            audio1.pause();
            audio1.currentTime = 0;
            oneIsPlaying = false;
            audio2.pause();
            audio2.currentTime = 0;
            twoIsPlaying = false;
            audio3.pause();
            audio3.currentTime = 0;
            threeIsPlaying = false;
            
            audio.play();
            fourIsPlaying = true;
            
            $(song1).fadeTo(600, 1);
            $(song2).fadeTo(600, 1);
            $(song3).fadeTo(600, 1);
            $(song4).fadeTo(600, .2);
        }
    }
}

/*
*  Plays audio for right side based on which button is clicked
*  Turns off all audio and resets times before playing
*  Sets values for visuals
*/
function playCDTrack(audio, num) {
    //Pause all CD songs
    audio1.pause();
    audio1.currentTime = 0;
    oneIsPlaying = false;
    audio2.pause();
    audio2.currentTime = 0;
    twoIsPlaying = false;
    audio3.pause();
    audio3.currentTime = 0;
    threeIsPlaying = false;
    audio4.pause();
    audio4.currentTime = 0;
    fourIsPlaying = false;
    //CD Visuals
    $(song1).fadeTo(600, 1);
    $(song2).fadeTo(600, 1);
    $(song3).fadeTo(600, 1);
    $(song4).fadeTo(600, 1);
    if (num == 5){
        if (fiveIsPlaying){
            //Audio portion
            audio.pause();
            audio.currentTime = 0;
            fiveIsPlaying = false;
            
            //Visual Portion
            $(song5).fadeTo(600, 1);
            $(song6).fadeTo(600, 1);
            $(song7).fadeTo(600, 1);
            $(song8).fadeTo(600, 1);
        } else {
            audio6.pause();
            audio6.currentTime = 0;
            sixIsPlaying = false;
            audio7.pause();
            audio7.currentTime = 0;
            sevenIsPlaying = false;
            audio8.pause();
            audio8.currentTime = 0;
            eightIsPlaying = false;
            
            audio.play();
            fiveIsPlaying = true;
            
            $(song5).fadeTo(600, 0);
            $(song6).fadeTo(600, 1);
            $(song7).fadeTo(600, 1);
            $(song8).fadeTo(600, 1);
        }
    } else if (num == 6){
        if (sixIsPlaying){
            audio.pause();
            audio.currentTime = 0;
            sixIsPlaying = false;
            
            $(song5).fadeTo(600, 1);
            $(song6).fadeTo(600, 1);
            $(song7).fadeTo(600, 1);
            $(song8).fadeTo(600, 1);
        } else {
            audio5.pause();
            audio5.currentTime = 0;
            fiveIsPlaying = false;
            audio7.pause();
            audio7.currentTime = 0;
            sevenIsPlaying = false;
            audio8.pause();
            audio8.currentTime = 0;
            eightIsPlaying = false;
            
            audio.play();
            sixIsPlaying = true;
            
            $(song5).fadeTo(600, 1);
            $(song6).fadeTo(600, 0);
            $(song7).fadeTo(600, 1);
            $(song8).fadeTo(600, 1);
        }
    } else if (num == 7){
        if (sevenIsPlaying){
            audio.pause();
            audio.currentTime = 0;
            sevenIsPlaying = false;
            
            $(song5).fadeTo(600, 1);
            $(song6).fadeTo(600, 1);
            $(song7).fadeTo(600, 1);
            $(song8).fadeTo(600, 1);
        } else {
            audio5.pause();
            audio5.currentTime = 0;
            fiveIsPlaying = false;
            audio6.pause();
            audio6.currentTime = 0;
            sixIsPlaying = false;
            audio8.pause();
            audio8.currentTime = 0;
            eightIsPlaying = false;
            
            audio.play();
            sevenIsPlaying = true;
            
            $(song5).fadeTo(600, 1);
            $(song6).fadeTo(600, 1);
            $(song7).fadeTo(600, 0);
            $(song8).fadeTo(600, 1);
        }
    } else if (num == 8){
        if (eightIsPlaying){
            audio.pause();
            audio.currentTime = 0;
            eightIsPlaying = false;
            
            $(song8).fadeTo(600, 1);
        } else {
            audio5.pause();
            audio5.currentTime = 0;
            fiveIsPlaying = false;
            audio6.pause();
            audio6.currentTime = 0;
            sixIsPlaying = false;
            audio7.pause();
            audio7.currentTime = 0;
            sevenIsPlaying = false;
            
            audio.play();
            eightIsPlaying = true;
            
            $(song5).fadeTo(600, 1);
            $(song6).fadeTo(600, 1);
            $(song7).fadeTo(600, 1);
            $(song8).fadeTo(600, 0);
        }
    }
}

/*
*	Grab artists from an external file
*	using id from php url
* initiates the updating of html for artist information
*/
function fetchArtists(id) {
  console.log(id);
  
  //AJAX request to webinfo json to get artist information
  $.getJSON("scripts/json/webInfo.json", function(data){
    //console.log(data);
    var artists = data.artists;
    //console.log(artists);
    
    //
    for ( var i = 0; i < artists.length; i++) {
      
      var resultID = artists[i].id;
      
      if (resultID == id) {
        
        userArtist = id;
        
        //Call update to setup the page content and pass in the artist object
        update(artists[i]);
      }
    }
  });
}

/*
*   Sets up the users artist variable
*   moves state forward
*/
function setComparison() {
	//content.innerHTML = "<h1>Compare " + userArtist + " with " + this.alt + "</h1>";
	//artistName.innerHTML = userArtist;
	
	//Make all other buttons regular size
	a1.style="transform: scale(1.0)";
	a2.style="transform: scale(1.0)";
	a3.style="transform: scale(1.0)";
    
	
	this.style="transform: scale(1.3); margin-left: 15px; margin-right: 15px";
	//this.style="margin: 10px";
	//hide the buttons
	//state.style.display="none";
}


/* 
* Update the content of page for particular artist
*/
function update(artistInfo) {
  
  console.log(artistInfo);
  
	html += "<h1>" + userArtist + " is your artist.</h1>";
	
	content.innerHTML = html;

	// set up another update to be called in 1/60 of a second
	//window.requestAnimationFrame(update);
}


/* 
* Set the station to active or inactive
*/
/*function switchState() {
	active = !active;
	
	state.style.display="block";
    leftCol.style.display="block";
    rightCol.style.display="block";
	this.style.display="none";
}*/