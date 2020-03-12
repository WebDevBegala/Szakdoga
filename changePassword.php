<?php
require_once "connect.php";
header("Access-Control-Allow-Origin: *");



$userData = $_POST['data']; //"Asd@asd.asd";
$data = json_decode($userData, true); //"Asdasdasd";
$newPass =  password_hash($data['newPass'], PASSWORD_BCRYPT);
$password = $data['password'];
$id = getUserId($db, $data['email']);


$getFriends = "SELECT active,email from (SELECT DISTINCT active,userID,user2ID from 
(SELECT userID,user2ID,active from friends where userID=$id) f where userID=$id) f,users u WHERE u.id=f.user2ID";

$updatePass = "UPDATE `users` SET `password`='".$newPass."' WHERE id =$id";

if ($result = $db->query($getUser)) {
    $result = $result->fetch_all(MYSQLI_ASSOC);
    //print_r($result);
    //echo($result[0]["password"]);
    $pass = $result[0]["password"];
    $logined = password_verify($password, $pass);
    if ($logined) {
        if ($db->query($updatePass) === true) {
            echo "Sikeres  művelet";
        } else {
            echo "Sikertelen";
        }
    } else {
        echo "Nem jó jelszó";
    }
} else {
    echo "0 results";
}


function getUserId($db, $email)
{
    $getUserId = "SELECT `id` FROM `users` WHERE `email` = '" . $email . "' LIMIT 1 ";

    if ($result = $db->query($getUserId)) {
        $result = $result->fetch_all(MYSQLI_ASSOC);
        return ($result[0]["id"]);
    } else {
        echo "0 results";
    }
}
