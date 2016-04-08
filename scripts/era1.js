"use strict"

// the active variable is wether or not the era station has a totem
var active;
// content is the div tagged ID on the html page
var content;
// state will change as app moves forward
//Cols will appear with info when totem is used
var state, leftCol, rightCol;
// html is the html that will be added to the page
var html;
// setting button
var fwdButton, resetButton;
// variables for the comparison artists
var a1, a2, a3;

// A string with the artist from the user. 
var user = {
	artist: "Bruno Mars",
	rfid: ""
}; 

var i = 0;

/*
* Set the variable to starting state and start the animation loop.
*/
function init() {
	active = false;
	html = "";
	content = document.querySelector("#content");
	state = document.querySelector("#state");
    leftCol = document.querySelector("#leftCol");
    rightCol = document.querySelector("#rightCol");
	
	//Set up hidden buttons
	state.style.display="none";
    leftCol.style.display="none";
    rightCol.style.display="none";
	
	//set up button
	fwdButton = document.querySelector("#forward");
	fwdButton.onclick = switchState;
	
	//will be replaced by totem functions
	resetButton = document.querySelector("#reset");
	resetButton.onclick = init;
	
	//set up artist buttons
	a1 = document.querySelector("#a1");
	a1.onclick = setComparison;
	a2 = document.querySelector("#a2");
	a2.onclick = setComparison;
	a3 = document.querySelector("#a3");
	a3.onclick = setComparison;
	
	window.requestAnimationFrame(update);
	getUser();
	fetchArtists();
	
	//set this at the end to re-display
	fwdButton.style.display="block";
}



/*
*	Grab artists from an external file
*	returns an array of Artists
*   returns three comparison artists
*/
function fetchArtists() {
	//Once RFID is set up this will user user.artist
	html += "<h1>" + user.artist + " is your artist.</h1>";
}

/*
*   Sets up the users artist variable
*   moves state forward
*/
function setComparison() {
	html = "<h1>Compare " + user.artist + " with " + this.innerHTML + "</h1>";
	
	//hide the buttons
	//state.style.display="none";
}


/* 
* Update the content
*/
function update() {
	// if the totem is here do this. 
	if (active) {
		content.innerHTML = html;
		// if code here
	} else {
		content.innerHTML = "<h1> Place your totem </h1><p> Click below </p>";
		// else code here
	}

	// set up another update to be called in 1/60 of a second
	window.requestAnimationFrame(update);
}

/*
* grab which user is at the station from the server
* 
*/
function getUser() {

}


/* 
* Set the station to active or inactive
*/
function switchState() {
	active = !active;
	
	state.style.display="block";
    leftCol.style.display="block";
    rightCol.style.display="block";
	this.style.display="none";
}