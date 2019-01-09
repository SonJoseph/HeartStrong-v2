<?php
require 'connect.php';

$str_json = file_get_contents('php://input');
$userInfo = json_decode($str_json, true);
// $userInfo is decoded into a php associative array

$password = md5($userInfo["password"]);

$checkUsername = "SELECT COUNT(*) FROM Users WHERE Username = '".$userInfo["username"]."'";
$result = mysqli_query($db, $checkUsername);
$ct = $result->fetch_assoc()["COUNT(*)"];

$data = "";
if($ct == 1){
   $data = "username taken";
}else{
    $register = "INSERT INTO Users (Firstname, Lastname, Age, Address, Username, Password) VALUES ('".$userInfo["firstname"]."','".$userInfo["lastname"]."',".$userInfo["age"].",'".$userInfo["address"]."','".$userInfo["username"]."','".$password."')";
    $result = mysqli_query($db, $register);
    $data = "user created";
}
echo json_encode(array("data" => $data));
mysqli_close($db);
?>