<?php
require_once "connect.php";
header("Access-Control-Allow-Origin: *");



$userData = $_POST['data'];//"Asd@asd.asd";
$data = json_decode($userData,true);//"Asdasdasd";
$email =  $data['email'];
$password = $data['password'];
$id = getUserId($db,$data['email']);


$getFriends = "SELECT active,email from (SELECT DISTINCT active,userID,user2ID from 
(SELECT userID,user2ID,active from friends where userID=$id) f where userID=$id) f,users u WHERE u.id=f.user2ID";


$getUser ="SELECT * FROM users WHERE email='".$email."'";
$n;

if ($result=$db->query($getUser)) {
    $result = $result->fetch_all(MYSQLI_ASSOC);
    //print_r($result);
    //echo($result[0]["password"]);
    $pass= $result[0]["password"];
    $logined = password_verify($password,$pass);
    $result[0]['password'] = "0";
    $result[0]['logined'] = true;
   // $result = json_encode($result);
    $current = array();

  
    if ($friends=$db->query($getFriends)) {
        $friends = $friends->fetch_all(MYSQLI_ASSOC);
       
       for($i=0;$i<count($friends);$i++){
           array_push($current,$friends[$i]);
       }
     
       $object = [
        'userData' => $result[0],
        'friends' => $current,
      ];

      $object = json_encode($object);

        if($logined){
            print_r ($object);
            }
        else{
            echo 0;
        }
    }

   
   
} else {
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