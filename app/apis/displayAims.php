<?php
require 'connect.php';

$aimUser = ($_GET['username']);


#$sql = "SELECT AimName FROM Aims WHERE PatientID=1";
$sql = "SELECT AimName FROM Aims WHERE Username='$aimUser'";
$result = mysqli_query($db, $sql);
$names = array();


if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $names[] = $row;
  }
  $sanitized = json_encode($names);
  echo $sanitized;
} else {
  echo "You haven't input any aims yet!";
}

mysqli_close($db);

?>
