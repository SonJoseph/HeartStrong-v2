<?php
/*
Hi, this is the dev branch. 
We will use this branch to connect to our local servers for testing purposes.
*/
$dbhost = getenv("MYSQL_SERVICE_HOST");  //IMPORTANT: the env MYSQL_SERVICE_HOST/PORT assumes your database service name is "MYSQL"
$dbport = getenv("MYSQL_SERVICE_PORT");  //If your database service name is "FOO", then this would be "FOO_SERVICE_HOST" and "FOO_SERVICE_PORT"
$dbuser = getenv("username");
$dbpwd = getenv("password");
$dbname = getenv("database_name");

$db = new mysqli($dbhost, $dbuser, $dbpwd, $dbname);
if ($db->connect_errno) {
    // printf("Connect failed: %s\n", $mysqli->connect_error); handle connection error
    exit();
} else {
    // printf("Connected to the database");
}
?>