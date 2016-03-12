		"use strict";
		
		var influencees = [];
		var questions = [];
		var answers = [];
		var questionValue, a1, a2, a3, a4;
		var currentNum = 0;
		
		window.onload = init;
		
		
		//debugger;

		function init() {
			loadInfluences();
			loadQuestions();
			
			questionValue = document.querySelector("#questionTitle");
			a1 = document.querySelector("#a1");
			a2 = document.querySelector("#a2");
			a3 = document.querySelector("#a3");
			a4 = document.querySelector("#a4");
			
			a1.onclick = a2.onclick = a3.onclick = a4.onclick = function(e){
				console.log(this.innerHTML);
				answers.push(this.innerHTML);
				changeQuestion(currentNum);
			};

			//changeQuestion(1);	
		}
		
		
		/*
		* Load in the influences from and external JSON file
		*/
		function loadInfluences() {
			var xhr = new XMLHttpRequest();
			xhr.onload = function(){ 
				// JSON.parse() converts a string to JSON. 
				var myJSON = JSON.parse( xhr.responseText );
				var allInfluencees = myJSON.influencees; 
				for (var i=0; i< allInfluencees.length;i++){ 
					
					influencees[i] = allInfluencees[i];
					
					var influencee = allInfluencees[i]; 
					
					//console.log(influencee.artist);
					//console.log(influencee.genre);
					//console.log(influencee.influencers);
				} 
			}
			var url = "scripts/json/tempArtists.json";
			xhr.open('GET',url,true);
			xhr.send();
		}

		/*
		* Load in the Questions and Answers from and external JSON file
		*/
		function loadQuestions() {
			var xhr = new XMLHttpRequest();
			xhr.onload = function(){ 
				// JSON.parse() converts a string to JSON. 
				var myJSON = JSON.parse( xhr.responseText );
				var allQuestions = myJSON.questions; 
				for (var i=0; i< allQuestions.length;i++){ 
					
					questions[i] = allQuestions[i];
					
					var question = allQuestions[i]; 
					
					//console.log(questions[i].txt);
					//console.log(questions[i].answers);
				} 
				//Initialize first question
				changeQuestion(0);
			}
			var url = "scripts/json/questions.json";
			xhr.open('GET',url,true);
			xhr.send();

		}
		
		function changeQuestion(qNum){
			if (questions[qNum]){
				questionValue.innerHTML = questions[qNum].txt;
	
				a1.innerHTML = questions[qNum].answers[0].txt;
				a2.innerHTML = questions[qNum].answers[1].txt;
				a3.innerHTML = questions[qNum].answers[2].txt;
				a4.innerHTML = questions[qNum].answers[3].txt;
				
				currentNum++;
			} else {
				setArtist();
			}
		}


		/*
		* Compare the artists genres and influences to the answers
		*/
		function setArtist() {
			// check to make sure the influencees are populated
			// and that the answers have been seleceted. 
			if (influencees.length > 0 && answers.length > 0) {
				for (var i = 0; i < influencees.length; i++) {
					influencees[i].score = 0;
					for (var j = 0; j < answers.length; j++) {

						if (influencees[i].genre == answers[j]){
							influencees[i].score++;
						}	
						else if (influencees[i].influencers == answers[j]) {
							influencees[i].score++;
						}
					}// end answers loop
				}// end influencees loop
			}// end if 

			// check each artist, if the artist has a higher score
			// than the current artist up for selection.
			var cur_artist = influencees[0];
			for (var x = 0; x < influencees.length; x++) {
				if (influencees[x].score > cur_artist.score) {
					cur_artist = influencees[x];
				}
			}

			// print out the current artist in the console.
			console.log(cur_artist.artist);

		}	