<?php

header("Access-Control-Allow-Origin: *");
include("connection.php");

$query = $mysqli->prepare("SELECT * FROM reviews");
$query->execute();
$array = $query->get_result();

$response = $array->fetch_all(MYSQLI_ASSOC);

$json = json_encode($response);
echo $json;

?>