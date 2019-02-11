<?php
require 'connect.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$get = 'SELECT Weight, Date, Unit FROM Weights WHERE Username = "' . $_GET["user"] . '"';
$result = mysqli_query($db, $get);

$weights = array();
            
while ($obj=mysqli_fetch_object($result))
{
    $weights += [$obj->Date => [[ "height" => 50, "name" => $obj->Weight . $obj->Unit]]];
}

echo json_encode(array("items"=>$weights)); 
?>