<!DOCTYPE html>
<html lang="en">
      <!--<img src="./media/era/top_fade.png" id="fade">-->
  <head>
    <meta charset="utf-8">
    <title>title</title>
    <link rel="stylesheet" href="styles/style.css">
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css'>
    <title>Rocpocalypse Project</title>
   	<script src="scripts/era.js"></script>
    <script src="http://code.jquery.com/jquery-2.2.1.min.js"></script>
  </head>
  <body>
    <!-- gets artist from URL -->
    <?php 
    
    #Grab the artist and pi from the javascript
    $artist = $_GET['artist'];
    
    ?>
    
    <!-- page content -->
    <header class="clearfix">
      <section id="content">
      </section>
        
    </header>
    
      
    <section id="leftCol">
        
        <div class="track" id="song1"></div>
        <div class="track" id="song2"></div>
        <div class="track" id="pic1"></div>
        <div class="track" id="song3"></div>
        <div class="track" id="pic2"></div>
        <div class="track" id="song4"></div>
    </section>
      
    <!--
        <div class="track" id="song1">When I Was Your Man<p><sub>Unorthodox Jukebox</sub></p></div>
        <div class="track" id="song2">Treaure<p><sub>Unorthodox Jukebox</sub></p></div>
        <div class="track" id="song3">Locked Out Of Heaven<p><sub>Unorthodox Jukebox</sub></p></div>
        <div class="track" id="song4">Just the Way You Are<p><sub>Doo-Wops & Hooligans</sub></p></div>
-->
      
      
      
    <section id="rightCol">
      <div id="state">
          <div class="button" id="a1"></div>
          <div class="button" id="a2"></div>
          <div class="button" id="a3"></div>
      </div>
        <div id="rightHead"></div>
      <div id="rightStuff">
      <div class="info clearfix">
          <div class="sub" id="song5"></div>
          
          <div class="sub" id="song6"></div>
          
          <div class="sub" id="song7"></div>
      </div>
          
      <div class="info clearfix">
          <div class="sub" id="gif"></div>
          
          <div class="sub" id="rightPic" style="width:64.5%"></div>
      </div>
          
      <div class="info clearfix">
          <div class="sub" id="quote" style="width:64.5%"></div>
          
          <div class="sub" id="song8"></div>
      </div>
    </div>
        
        
        
    <div id="rightStuffUnder">
      <div class="info clearfix">
          <div class="sub" id="cd1"></div>
          
          <div class="sub" id="cd2"></div>
          
          <div class="sub" id="cd3"></div>
      </div>
          
      <div class="info clearfix">
          <div class="sub"><img class="trackPicture" style="opacity: 0.0;" src="media/era/Michael Jackson/MJ_photo01.gif"></div>
          
          <div class="sub" style="width:64.5%"><img class="trackPicture" style="opacity: 0.0;" src="media/era/Michael Jackson/MJ_photo02.jpg"></div>
      </div>
          
      <div class="info clearfix">
          <div class="sub" style="width:64.5%"><img class="trackPicture" style="opacity: 0.0;" src="media/era/Michael Jackson/MJ_quote.png"></div>
          
          <div class="sub" id="cd4"></div>
      </div>
    </div>
    </section>
      
      
    
      
  </body>
  <script>
    //set artist from URL to variable
    var artistID = '<?php echo $artist; ?>';
    
    //initial page setup
    window.onload = init();
    
    //pass in artist to fill content
    fetchArtists(artistID);
  </script>
</html>