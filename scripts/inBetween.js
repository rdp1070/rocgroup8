window.onload = init; // on the page booting up, call the init function!
	
		"use strict"
		// Make sure you use strict, otherwise stupid stuff can happen.
		var canvas, canvas2, ctx, ctx2, videoElement, w, h;
		var dataArray = ["","","","","","","",""];
		var oldData = null;
		var detected = false;
		var trnsData = [];
		var anim = "";
		// by calling document and saving it localy, it prevents the program
		// from having to jump through a lot of hoops in order to 
		// get the document the 4 other times we call it
		// making the program slightly faster. 
		var doc = document;
		

		/*
		* This initializes all of the variables and is called on page loading.
		*/
		function init(){
			canvas = doc.getElementById('canvas'); 
			ctx = canvas.getContext('2d');
			canvas2 = doc.getElementById("canvas2");
			ctx2 = canvas2.getContext('2d');
			anim = doc.querySelector('#anim');
            videoElement = doc.querySelector('video');
			w = videoElement.clientWidth;
			h = videoElement.clientHeight;
			canvas.width = w; 
			canvas.height = h;
			canvas2.width = w; 
			canvas2.height = h;

			if(navigator.webkitGetUserMedia!=null) { 
			var options = { 
				video:true, 
				audio:false 
			}; 
			 
			//request webcam access 
			navigator.webkitGetUserMedia(options, 
				function(stream) { 
					//turn the stream into a magic URL 
					videoElement.src = window.URL.createObjectURL(stream); 
				},
				function(e) { 
					console.log("error happened"); 
					alert("You have navigator.webkitGetUserMedia, but an error occurred");
				
				} 
			); 
		};
			
			// every 100 milliseconds delete 1/20th the data 
			this.setInterval(function(){ 
				console.log("trnsData.length : " + trnsData.length);
				trnsData = trnsData.slice(trnsData.length/20,trnsData.length);
			}, 100); // end setInterval

			// call the drawEffect function for the first time. 
			drawEffect();
		}
	
	
		
		/*
		* This is the function that calls the motion detector
		* It also calls the blackout function, that itself
		* calls the drawAnim function. 
		*/
		function drawEffect() { 
			// draw the video element.
			ctx.drawImage(videoElement, 0, 0, w, h);
			var imageData = ctx.getImageData(0, 0, w, h);
			
			var data = imageData.data;
			var length = data.length;
			var width = imageData.width;
			
		
			if (oldData != null){
				// detect the motion by comparing the data to the oldData
				data = motionDetection(data,oldData, trnsData);
				// blackout the new data.
				data = blackOut( trnsData, ctx2);
			}
		
			// Data becomes old data for comparison
			oldData = data;
			// call an animation frame, which is a delayed call of a function every 1/60th of a second.
			requestAnimationFrame(drawEffect);	
		}
		
		/*
		* Compare the new data to the old data
		* If the oldData has a certain amount of changes from the new data
		* Do some stuff!
		*/
		function motionDetection(data,oldData, trnsData){
			var threshold = 13;
			// for each pixel in height
			for( var y = 0 ; y < h; y++ ) {
				// for each pixel in width
				for( var x = 0 ; x < w; x++ ) {
					var indexOld = (y * w + x) * 4, oldr = oldData[indexOld], oldg = oldData[indexOld+1], oldb = oldData[indexOld+2], olda = oldData[indexOld+3];
					var indexNew = (y * w + x) * 4, r = data[indexNew], g = data[indexNew+1], b = data[indexNew+2], a = data[indexNew+3];
					if (oldr > r - threshold || oldg > g - threshold || oldb > b -threshold) {
						// We used to do stuff here, but not anymore. 
						// If you do things here, it does it a huge amount of times and slows
						// everything down. So we do it in a different function, not in a bunch
						// of for loops. 
					} else {

						// if the red green or blue break the threshold add that number to the array of 
						// data that has transparent pixels.
						trnsData.push(indexNew);

						// this array will be used later when we determine which pixels need to be 
						// transparent. 
					}
					
				} // end for x
			} // end for y
			return data;
		};

		/*
		* Get every pixel that isn't transparent and turn it black
		*/
		function blackOut(trnsData, ctx){

			// This is where you can now draw the animation
			drawAnim(ctx);
			
			// Get the new image data 
			var imgdata = ctx.getImageData(0, 0, w, h);
			data = imgdata.data;
			
			// for each trnsData point change that data to transparent.
			var l = trnsData.length;
			for (var j = 0; j < l; j++){
				data[trnsData[j]] = 0;
				data[trnsData[j]+1] = 0;
				data[trnsData[j]+2] = 0;
				data[trnsData[j]+3] = 0;
			}

			// put the new img data onto the canvas
			ctx.putImageData(imgdata,0,0);
		}

		/*
		* Draw the animation, whatever that may be
		*/
		function drawAnim(ctx){
			// This is where the animation gets drawn
			// Take in the img data from a video provided by dez
			// :D !!!
            ctx.drawImage(anim, 0, 0, w, h);
			// Right now it just makes the screen black. 
			//ctx.fillStyle = "black";
			//ctx.fillRect(0,0,w,h);
		}