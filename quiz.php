<!DOCTYPE html>
<html lang="en">
  <head>
	
    <meta charset="utf-8">
    <title>Quiz</title>
    <link rel="stylesheet" href="styles/quiz_style.css">
    <title>Rocpocalypse Project</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
   	<script src="scripts/quiz.js"></script>
	
  </head>
  <body>
      <section id="content"></section>
      <!-- page content -->
      <div id = "question">
          <h1 id = "questionTitle">This is a question</h1>
      </div>
      <div id = "answers">
      </div>
      <button id = "back" onclick = "goBack()"> <img src="media/quiz/backarrow.png"></button>
      <?php
      #include loadArtist.php
      ?>
  </body>
</html>