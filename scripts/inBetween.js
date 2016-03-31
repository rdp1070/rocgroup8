window.onload = init;
		var canvas, canvas2, ctx, videoElement, w, h;
		var oldData = null;
		var detected = false;
		
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
			
			
			drawEffect();
		}
	
	
		
		
		
		function drawEffect() { 
			
			ctx.drawImage(videoElement, 0, 0, w, h);
			var imageData = ctx.getImageData(0, 0, w, h);
			
			var data = imageData.data;
			var length = data.length;
			var width = imageData.width;
			
			
			
		
			if (oldData != null){
				data = motionDetection(data,oldData);
				oldData = data;
				//blackOut(imageData, ctx2);
			} else {
				//oldData = data;
			}	
		
				
			ctx.putImageData(imageData, 0, 0);
			oldData = data;
			requestAnimationFrame(drawEffect);	
		}
		
		function motionDetection(data,oldData){
			var threshold = 3;
			for( var y = 0 ; y < h; y++ ) {
				for( var x = 0 ; x < w; x++ ) {
				
					var indexOld = (y * w + x) * 4, oldr = oldData[indexOld], oldg = oldData[indexOld+1], oldb = oldData[indexOld+2], olda = oldData[indexOld+3];
					var indexNew = (y * w + x) * 4, r = data[indexNew], g = data[indexNew+1], b = data[indexNew+2], a = data[indexNew+3];
					if (oldr > r - threshold || oldg > g - threshold || oldb > b -threshold) {
						/*
						data[indexNew] = 0;
						data[indexNew+1] = 0; 
						data[indexNew+2] = 0; 
						data[indexNew+3] = 255; 
						detected = true;*/
					} else {
						data[indexNew] = 255; 
						data[indexNew+1] = 0; 
						data[indexNew+2] = 0; 
						data[indexNew+3] = 0;
						
					}
					
				} // end for x
			} // end for y
			return data;
		};

		/*
		* Get every pixel that isn't transparent and turn it black
		*/
		function blackOut(ImageData,ctx){
			var data = ImageData.data;
			for( var y = 0 ; y < h; y++ ) {
				for( var x = 0 ; x < w; x++ ) {
				
					var indexNew = (y * w + x) * 4, r = data[indexNew], g = data[indexNew+1], b = data[indexNew+2], a = data[indexNew+3];
					// unless the pixel is transparent, black it out.
					if (r == 0  &&  g == 0  && b == 0) {
						data[indexNew] = 0;
						data[indexNew+1] = 0; 
						data[indexNew+2] = 0; 
						data[indexNew+3] = 0; 
					} else {
						data[indexNew] = 0; 
						data[indexNew+1] = 0; 
						data[indexNew+2] = 0; 
						data[indexNew+3] = 255;
						
					}
					
				} // end for x
			} // end for y
			ctx.putImageData(ImageData,0,0);
		}
		