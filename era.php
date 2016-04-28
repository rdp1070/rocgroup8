<!DOCTYPE html>
<html lang="en">
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
          <img class="button" id="a1" alt="The Beatles" src="media/the_beatles.jpg">
          <img class="button" id="a2" alt="Michael Jackson" src="media/michael_jackson.jpg">
          <img class="button" id="a3" alt="Elvis" src="media/elvis.jpg">
      </div>
    </header>
      
    <section id="leftCol">
        Artist Title
        <div class="track">Thing</div>
        <div class="track">Thing</div>
        <div class="track">Thing</div>
        <div class="track">Thing</div>
    </section>
      
    <section id="rightCol">
      <div class="info">Comparison Track</div>
      <div class="info clearfix">
          <div class="sub"><img class="trackPicture" src="media/the_beatles.jpg"></div>
          <div class="sub">Stuff</div>
          <div class="sub">Stuff</div>
      </div>
      <div class="info clearfix">
          <div class="sub" style="width:40%">Stuff</div>
          <div class="sub" style="width:49%">Stuff</div>
      </div>
      <div class="info clearfix">
          <div class="sub" style="width:49%">Stuff</div>
          <div class="sub" style="width:40%">Stuff</div>
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