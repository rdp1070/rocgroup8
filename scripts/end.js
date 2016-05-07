window.onload = init;
var artist;
var assets;
var i;

function init() {
  //  artist = getArtist();
    assets = { "arists": [{ 
                "artist_art": "media/end/grande_large_cd.png",
                "influence" : "BEYONCE",
                "artist_text": "HAD INSPIRED RISING STARS LIKE:",
                "artist_name" : "ARIANA GRANDE"
            }, 
            { 
                "artist_art" : "media/end/kings_large_cd.png",
                "influence" : "FOO FIGHTERS",
                "artist_text": "HAD INSPIRED RISING BANDS LIKE:",
                "artist_name" : "KINGS"
            },
            {
                "artist_art" : "media/end/shawn_large_cd.png",
                "influence" : "BRUNO MARS",
                "artist_text": "HAD INSPIRED RISING STARS LIKE:",
                "artist_name" : "SHAWN MENDEZ"            
            }]}
    i = 0;
}


// next animation plz
function changeAnim(num){
    if (i < 2) { 
        console.log("what " + i );
        $('#content').fadeOut(1000, function(){
            $('#artist_art').attr("src",assets.arists[i].artist_art);
            $('#influence').text(assets.arists[i].influence);
            $('#artist_text').text(assets.arists[i].artist_text);
            $('#artist_name').text(assets.arists[i].artist_name);
            $('#content').fadeIn(1000);
        });
        
        setTimeout(function(){changeAnim(i); i++}, 5000);
    } else { 
        i = 0;
        setTimeout(function(){changeAnim(i); i++}, 5000);
    }
   
}

function write(){
    console.log("text");
}
setTimeout(function(){changeAnim(i); i++}, 5000);

