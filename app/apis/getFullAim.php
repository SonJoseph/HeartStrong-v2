<?php
require 'connect.php';

$aimTitle = ($_GET["aimTitle"]);
$user = ($_GET["username"]);

$sql = "SELECT AimText FROM Aims WHERE AimName='$aimTitle' AND Username='$user'";
$result = mysqli_query($db, $sql);

if (!$result) {
  error_log("Could not find an aim with that title");
} else {
  $fullText = $result->fetch_assoc();
  $sanitized = json_encode($fullText);
  echo $sanitized;
}




mysqli_close($db);
?>
