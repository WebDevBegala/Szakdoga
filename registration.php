<?php
require_once "connect.php";
require "getId.php";
header("Access-Control-Allow-Origin: *");


$userData = $_POST['data'];
$data = json_decode($userData, true);
$name = $data['name'];
$email = $data['email'];
$password = $data['password'];
$password = password_hash($password, PASSWORD_BCRYPT);

$getAllId = "SELECT count(*) FROM `users`";
$getUser = "SELECT * FROM users WHERE email='" . $email . "'";
$n;
if ($result = $db->query($getAllId)) {
    $result = $result->fetch_all();
    $n = $result[0][0] + 1;
} else {
    echo "0 results";
}

$register = "INSERT INTO users (id,name,email,password)
VALUES ('" . $n . "','" . $name . "', '" . $email . "', '" . $password . "')";
if ($db->query($register) === TRUE) {
    mkdir("./images/".getUserId($db,$email));
    
    echo true;
} 
else {
    echo "Error: " . $register . "<br>" . $db->error;
}