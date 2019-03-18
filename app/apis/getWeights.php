<?php
/*
Return weights in specified month and year
*/
require 'connect.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$month = (int) $_GET["month"]; #indexed 1-12
$year = (int) $_GET["year"];

$get = 'SELECT Weight, Day, Unit FROM Weights WHERE Username = "'
 . $_GET["user"] . '" and Year = ' . $year 
 . ' and Month = '. $month . ' ORDER BY Day ASC';

$result = mysqli_query($db, $get);

$weights = array();
while ($obj=mysqli_fetch_object($result))
{
    array_push($weights, 
    [
        "day" => $obj->Day, 
        "weight" => $obj->Weight,
        "unit" => $obj->Unit
    ]);
}

$cal = array();
$j = 0;
for($i = 1; $i <= cal_days_in_month(CAL_GREGORIAN, $month, $year); $i++){ // relies on $weights ordered by ascending day
    $date = $year . "-" . $month . "-" . $i;
    if(sizeof($weights) > $j && $weights[$j]["day"] == $i){
        array_push($cal, 
        [
            "dateInfo" =>
                [
                    "date" => $date,
                    "year" => $year,
                    "month" => $month,
                    "day" => $i,
                ],
            "weight" => $weights[$j]["weight"],
            "unit" => $weights[$j]["unit"]
        ]);
        $j++;
    }else{
        array_push($cal, 
        [
            "dateInfo" =>
                [
                    "date" => $date,
                    "year" => $year,
                    "month" => $month,
                    "day" => $i,
                ], 
            "weight" => "",
            "unit" => ""
        ]);
    }
}

echo json_encode(array("items"=>$cal)); 
?>