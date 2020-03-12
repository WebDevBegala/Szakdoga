<?php

require_once "connect.php";
require "getId.php";

$data = json_decode($_POST['data'],true);
$fromId = getUserId($db,$data['fromId']);
$to = getUserId($db,$data['toId']);

$getMessages = "SELECT * FROM `messages` WHERE fromID=$fromId and toID=$to or fromID=$to and toID=$fromId";

if($res=$db->query($getMessages)){
    $res = $res->fetch_all(MYSQLI_ASSOC);
   
    print_r(json_encode($res));
}
else{
    echo "Sikertelen".$db->query($getMessages);
}