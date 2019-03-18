<?php
require 'connect.php';

$str_json = file_get_contents('php://input');
$weightInfo = json_decode($str_json, true);

$insert = "INSERT INTO Weights (Username, Date, Weight, Unit) VALUES 
('".$weightInfo["username"]."','".$weightInfo["date"]."',".$weightInfo["weight"].",'".$weightInfo["unit"]."')";

$result = mysqli_query($db, $insert);
echo json_encode(array("data" => $result));

mysqli_close($db);
?>