<?php
require 'connect.php';

$user = ($_POST["username"]);
$journalInput = ($_POST["journal"]);
$mood = ($_POST["mood"]);

if (empty($journalInput) or empty($mood)) {
  echo 'Please fill out the form and select a mood!';
} else {
  $insert = "INSERT INTO `sonjndtj_HeartStrong`.`Journals` (`Username`, `JournalEntry`, `Mood`) VALUES ('$user','$journalInput','$mood')";
  $result = mysqli_query($db, $insert);
  if (!$result) {
    error_log("Nothing posted!");
    echo("Error description: " . mysqli_error($db));
  } else {
    echo 'Success!';
  }

}



mysqli_close($db);
?>
