"use strict"

// the active variable is wether or not the era station has a totem
var active;;
// content is the div tagged ID on the html page
var content;
// html is the html that will be added to the page
var html;

// A string with the artist from the user. 
var user = {
	artist: "",
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
	window.requestAnimationFrame(update);
	getUser();
	fetchArtists();
}



/*
*	Grab artists from an external file
*	returns an array of Artists
*/
function fetchArtists() {
	html += "<h1>test artist</h1>"
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
		content.innerHTML = "<h1> This is the test inactive page </h1><p> some more stuff goes here </p>";
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
}