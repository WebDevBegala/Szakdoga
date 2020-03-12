<?php

require_once "connect.php";

$data = json_decode($_POST['data'],true);
$fromId = getUserId($db,$data['fromId']);
$toId = getUserId($db,$data['toId']);
$message = $data['message'];




$saveMessage = "INSERT INTO `messages`(`fromID`, `toID`, `message`) VALUES ($fromId,$toId,'".$message."')";

if($db->query($saveMessage) === true){
    echo "Sikeres";
}
else{
    echo "Sikertelen";
}
function getUserId($db,$email){
    $getUserId = "SELECT `id` FROM `users` WHERE `email` = '".$email."' LIMIT 1 " ;

    if($result=$db->query($getUserId)) {
        $result = $result->fetch_all(MYSQLI_ASSOC);
       return($result[0]["id"]);
    
    } else {
        echo "0 results";
    } 
}