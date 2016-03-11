		"use strict";
		window.onload = loadData;
		
		var influencees = [];
		
		function loadData(){
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
