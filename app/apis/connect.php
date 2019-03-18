<?php
/*
Hi, this is the dev branch. 
We will use this branch to connect to our local servers for testing purposes.
*/
$dbhost = '127.0.0.1'; 
$dbport = '3306';  
$dbuser = 'root';
$dbpwd = '!Cos18mos!';
$dbname = 'heartstrongdb';

$db = new mysqli($dbhost, $dbuser, $dbpwd, $dbname);
if ($db->connect_error) {
    //printf("Connect failed: %s\n", $mysqli->connect_error); 
} else {
   // printf("Connected to the database");
}

?>