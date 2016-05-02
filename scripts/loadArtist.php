<?php

#Grab the pi from the URL
#$pi = htmlspecialchars($_GET["pi"]);
echo "running";

#Query our quiz artist json file to get selected artist
$file = file_get_contents('http://10.59.12.32/scripts/json/tempArtists.json');
$json = json_decode($file, true);

$cArtist = $json['currentArtist'];

echo $cArtist;

#Variables to connect to MySQL Database
$servername = "kmbhostevoke.rh.rit.edu";
$username = "rock";
$database = "rockbase";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$database", $username);
  
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected successfully";
  
  #$sql = "UPDATE `totems` SET `ARTIST` = 'Bruno_Mars' WHERE `totems`.`NAME` = $pi;";
  
} catch (PDOException $e) {
  echo "Connection Failed: " . $e->getMessage();
}

?>