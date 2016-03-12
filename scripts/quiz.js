		"use strict";
		window.onload = loadInfluences;
		
		var influencees = [];
		var questions = [];

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
					
					console.log(influencee.artist);
					console.log(influencee.genre);
					console.log(influencee.influencers);
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
					
					console.log(questions[i].txt);
					console.log(questions[i].answers);
				} 
			}
			var url = "scripts/json/questions.json";
			xhr.open('GET',url,true);
			xhr.send();

		}