window.onload = init;
		var canvas, canvas2, ctx, videoElement, w, h;
		var dataArray = ["","","","","","","",""];
		var oldData = null;
		var detected = false;
		var trnsData = [];
		
		function init(){
			canvas = document.getElementById('canvas'); 
			ctx = canvas.getContext('2d');
			canvas2 = document.getElementById("canvas2");
			ctx2 = canvas2.getContext('2d');
			videoElement = document.querySelector('video'); 
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
					videoElement.src = window.webkitURL.createObjectURL(stream); 
				},
				function(e) { 
					console.log("error happened"); 
					alert("You have navigator.webkitGetUserMedia, but an error occurred");
				
				} 
			); 
		};
			
			// every x milliseconds chunk 1/4th the data 
			this.setInterval(function(){ 
				console.log("trnsData.length : " + trnsData.length);
				trnsData = trnsData.slice(trnsData.length/10,trnsData.length);
			}, 100); // end setInterval

			drawEffect();
		}
	
	
		
		
		
		function drawEffect() { 
			
			ctx.drawImage(videoElement, 0, 0, w, h);
			var imageData = ctx.getImageData(0, 0, w, h);
			
			var data = imageData.data;
			var length = data.length;
			var width = imageData.width;
			
		
			if (oldData != null){
				// detect the motion by comparing the data to the oldData
				data = motionDetection(data,oldData, trnsData);
				// blackout the new data.
				data = blackOut(imageData, trnsData, ctx2);
			} else {
				//oldData = data;
			}	
		
				
			ctx.putImageData(imageData, 0, 0);
			oldData = data;
			requestAnimationFrame(drawEffect);	
		}
		
		function motionDetection(data,oldData, trnsData){
			var threshold = 7;
			// for each pixel in height
			for( var y = 0 ; y < h; y++ ) {
				// for each pixel in widht
				for( var x = 0 ; x < w; x++ ) {
					var indexOld = (y * w + x) * 4, oldr = oldData[indexOld], oldg = oldData[indexOld+1], oldb = oldData[indexOld+2], olda = oldData[indexOld+3];
					var indexNew = (y * w + x) * 4, r = data[indexNew], g = data[indexNew+1], b = data[indexNew+2], a = data[indexNew+3];
					if (oldr > r - threshold || oldg > g - threshold || oldb > b -threshold) {
						
					} else {
						// if the red green or blue break the threshold add that number to the array of 
						// data that has transparent pixels.
						trnsData.push(indexNew);
						
					}
					
				} // end for x
			} // end for y
			return data;
		};

		/*
		* Get every pixel that isn't transparent and turn it black
		*/
		function blackOut(ImageData, trnsData, ctx){
			var data = ImageData.data;
			// color the whole screen black
			ctx2.fillStyle = "black";
			ctx2.fillRect(0,0,w,h);
			
			// for each trnsData point change that data to transparent.
			for (var j = 0; j < trnsData.length; j++){
				data[trnsData[j]] = 0;
				data[trnsData[j]+1] = 0;
				data[trnsData[j]+2] = 0;
				data[trnsData[j]+3] = 0;
			}
			ctx2.putImageData(ImageData,0,0);
		}