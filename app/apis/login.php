<?php
require 'connect.php';

$str_json = file_get_contents('php://input');
$loginInfo = json_decode($str_json, true);
//$loginInfo = array("username" => ___ , "password" => ___)
$password = md5($loginInfo["password"]);

$sql = 'SELECT COUNT(*) FROM Users WHERE Username = "'. $loginInfo["username"] .'" AND Password = "'.$password.'"';

$result = mysqli_query($db, $sql);
$ct = $result->fetch_assoc()["COUNT(*)"];

$data;
if($ct==1){
//    setcookie('user', $_POST['username'],  time() + (86400 * 30), '/');
    $data = 1;
}else{
    $data = 0;
}

echo json_encode(array("data" => $data));
mysqli_close($db);
?>