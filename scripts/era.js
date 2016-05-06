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
var song1, song2, song3, song4, song5;
var audio1, audio2, audio3, audio4, audio5;
var oneIsPlaying, twoIsPlaying, threeIsPlaying, fourIsPlaying, fiveIsPlaying;
var isPlaying;

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
    
    song1 = document.querySelector("#song1");
    song1.onclick = function(){playTrack(audio1, 1)};
    song2 = document.querySelector("#song2");
    song2.onclick = function(){playTrack(audio2, 2)};
    song3 = document.querySelector("#song3");
    song3.onclick = function(){playTrack(audio3, 3)};
    song4 = document.querySelector("#song4");
    song4.onclick = function(){playTrack(audio4, 4)};
    isPlaying = false;
}

/*
*  Plays audio based on which button is clicked
*
*
*/
function playTrack(audio, num) {
    if (num == 1){
        if (oneIsPlaying){
            //Audio portion
            audio.pause();
            audio.currentTime = 0;
            oneIsPlaying = false;
            
            //Visual Portion
            song1.style="background-color: #292929;";
            song2.style="background-color: #292929;";
        } else {
            audio2.pause();
            audio2.currentTime = 0;
            audio.play();
            oneIsPlaying = true;
            
            song1.style="background-color: #000000;";
            song2.style="background-color: #292929;";
        }
    } else if (num == 2){
        if (twoIsPlaying){
            audio.pause();
            audio.currentTime = 0;
            twoIsPlaying = false;
            
            song1.style="background-color: #292929;";
            song2.style="background-color: #292929;";
        } else {
            audio1.pause();
            audio1.currentTime = 0;
            audio.play();
            twoIsPlaying = true;
            
            song1.style="background-color: #292929;";
            song2.style="background-color: #000000;";
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