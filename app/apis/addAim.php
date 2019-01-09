<?php
require 'connect.php';

$target_dir = "./upload/";
$aimUser = ($_POST["username"]);
$aimTitle = ($_POST["name"]);
$aimText = ($_POST["text"]);
//$aimPhoto = ($_POST["aimPhoto"]);
$target_file = $target_dir . basename($_FILES["file"]["name"]);

$checkTitle = "SELECT COUNT(*) FROM `Aims` WHERE AimName = '$aimTitle' AND Username = '$aimUser'";
$titleCount = mysqli_query($db, $checkTitle);

//Enforce unique names for aim retrieval
#if ($titleCount) {
#echo("You already have an aim with that name!");
#} else {
  if (empty($aimTitle) or empty($aimText)) {
    echo "You can't leave name or description empty!";
  } else {
    $insert = "INSERT INTO `Aims`(`Username`, `AimName`, `AimText`, `AimImage`) VALUES ('$aimUser','$aimTitle','$aimText', '".basename($_FILES["file"]["name"])."')";
    $result = mysqli_query($db, $insert);
    if ($result) {
      echo "Aim Added!";
    } else {
      echo("Error description: " . mysqli_error($db));
    }

  }
##}

mysqli_close($db);
?>
