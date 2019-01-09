<?php
require 'connect.php';

$insert = "INSERT INTO Weights (Username, Date, Weight, Unit) VALUES ('".$_POST["username"]."','".$_POST["date"]."',".$_POST["weight"].",'".$_POST["unit"]."')";
$result = mysqli_query($db, $insert);

echo $result;

mysqli_close($db);
?>