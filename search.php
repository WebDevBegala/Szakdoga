<?php
require_once "connect.php";
header("Access-Control-Allow-Origin: *");



$data = $_POST['data'];
$d = json_decode($data,true);
$text = $d['text'];

$search = "SELECT `email` FROM `users` WHERE `email` LIKE '%".$text."%'";


if ($result=$db->query($search)) {
   $result = $result->fetch_all(MYSQLI_ASSOC);
   $data = array();
    for ($i=0; $i < count($result); $i++) { 
        array_push($data,$result[$i]["email"]);
    }
    $data = json_encode($data);
   print_r($data);
   
} else {
    echo "0 results";
} 
