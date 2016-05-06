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
    <?php include 'scripts/artist.php';?>
    
    <!-- page content -->
    <header class="clearfix">
      <section id="content">
      </section>
        
      <div id="state">
          <img class="button" id="a1" alt="The Beatles" src="media/era/the_beatles.jpg">
          <img class="button" id="a2" alt="Michael Jackson" src="media/era/michael_jackson.jpg">
          <img class="button" id="a3" alt="Elvis" src="media/era/elvis.jpg">
      </div>
    </header>
    
      
    <section id="leftCol">
        <img src="media/era/Bruno Mars/BrunoMars_header.png" width="100%">
        <div id="artistName">
        </div>
        <div class="track" id="song1"><img src="media/era/Bruno Mars/bruno_song-1.png" width="100%"></div>
        <div class="track" id="song2"><img src="media/era/Bruno Mars/bruno_song-2.png" width="100%"></div>
        <div class="track" id="song3"><img src="media/era/Bruno Mars/bruno_song-3.png" width="100%"></div>
        <div class="track" id="song4"><img src="media/era/Bruno Mars/bruno_song-4.png" width="100%"></div>
    </section>
      
    <!--
        <div class="track" id="song1">When I Was Your Man<p><sub>Unorthodox Jukebox</sub></p></div>
        <div class="track" id="song2">Treaure<p><sub>Unorthodox Jukebox</sub></p></div>
        <div class="track" id="song3">Locked Out Of Heaven<p><sub>Unorthodox Jukebox</sub></p></div>
        <div class="track" id="song4">Just the Way You Are<p><sub>Doo-Wops & Hooligans</sub></p></div>
-->
      
      
      
    <section id="rightCol">
      <img src="media/era/Michael Jackson/MicahelJackson_header.png" width="70%">
      <div id="rightStuff">
      <div class="info clearfix">
          <div class="sub"><img class="trackPicture" src="media/era/Michael Jackson/MJ_song01.png"></div>
          
          <div class="sub"><img class="trackPicture cdpic" src="media/era/Michael Jackson/MJ_song01A.png"><img class="trackPicture" src="media/era/Michael Jackson/MJ_song01BPeter.png"></div>
          
          <div class="sub"><img class="trackPicture" src="media/era/Michael Jackson/MJ_song02.png"></div>
      </div>
      <div class="info clearfix">
          <div class="sub"><img class="trackPicture" src="media/era/Michael Jackson/MJ_photo01.gif"></div>
          
          <div class="sub" style="width:58.9%"><img class="trackPicture" src="media/era/Michael Jackson/MJ_photo02.jpg"></div>
      </div>
      <div class="info clearfix">
          <div class="sub" style="width:58.9%"><img class="trackPicture" src="media/era/Michael Jackson/MJ_quote.png"></div>
          
          <div class="sub"><img class="trackPicture" src="media/era/Michael Jackson/MJ_song02.png"></div>
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