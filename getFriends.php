<?php
require_once "connect.php";
header("Access-Control-Allow-Origin: *");



$friendData = $_POST['data'];
$data = json_decode($friendData,true);
$fromId =  getUserId($db,$data['fromId']);


$getFriends = "SELECT active,email from (SELECT DISTINCT active,userID,user2ID from 
(SELECT userID,user2ID,active from friends where userID=$fromId) f where userID=$fromId ) f,users u WHERE u.id=f.user2ID";


        if ($result=$db->query($getFriends)) {
            $result = $result->fetch_all(MYSQLI_ASSOC);
            print_r(json_encode($result));
        } 
        else {
            echo "0 results";
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