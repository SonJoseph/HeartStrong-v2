<?php
require 'connect.php';

$aimTitle = ($_GET["aimTitle"]);
$user = ($_GET["username"]);

$img = "SELECT AimImage FROM Aims WHERE AimName='$aimTitle' AND Username='$user'";

$result = mysqli_query($db,$img);

if ($result == null) {
  echo "You don't have a picture for this aim!";
} else {
  $row = mysql_fetch_array($result);
  header("Content-Type: image/jpeg");
  echo '"data:image/jpeg;base64,".base64_encode($row['AimImage'] ).';
  //echo 'data:image/jpeg;base64,'.base64_encode($result->load()) .'';
  //echo $row['AimImage'];
}


mysqli_close($db);
?>
