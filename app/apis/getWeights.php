<?php
require 'connect.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$get = 'SELECT Weight, Date, Unit FROM Weights WHERE Username = "' + $_POST["user"] + '"';
$result = mysqli_query($db, $get);

//$weights = '{"records" : [';
$weights = '[';

while ($obj=mysqli_fetch_object($result))
    {
        $weights .= '{ "title" : "' . $obj->Weight . ' ' . $obj->Unit . '", "start" : "' . $obj->Date . '"}';
    }

//$weights .= ']}'; 
$weights .= ']';
//echo json_encode($weights);
echo json_encode(["records"=>$weights]); 
?>