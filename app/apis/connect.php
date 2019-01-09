<?php
$servername = "localhost";
$username = "sonjndtj_root";
$password = "2gZFv=9SFm";
$dbname = "sonjndtj_HeartStrong";

// Create connection to heartstrong database
$db = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
} 
?>