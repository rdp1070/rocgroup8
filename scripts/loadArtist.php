<?php

#Grab the artist and pi from the javascript
$cArtist = $_POST['artist'];

echo $cArtist;

$piN = $_POST['pi'];

echo $piN;

#Variables to connect to MySQL Database
$servername = "kmbhostevoxe.rh.rit.edu";
$username = "rock";
$database = "rockbase";

try {
  //create connection
  $conn = new PDO("mysql:host=$servername;dbname=$database", $username);
  
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected successfully";
  
  $sql = "UPDATE `totems` SET `ARTIST` = '" . $cArtist . "' WHERE `NAME` = '" . $piN . "'";
  
  // Prepare statement
  $stmt = $conn->prepare($sql);

  // execute the query
  $stmt->execute();

  // echo a message to say the UPDATE succeeded
  echo $stmt->rowCount() . " records UPDATED successfully";
  
} catch (PDOException $e) {
  echo "Connection Failed: " . $e->getMessage();
}

?>