
<?php
require_once "connect.php";
require "getId.php";
header("Access-Control-Allow-Origin: *");
//header('Content-Type:multipart/form-data');
/*
if (isset($_POST['data'])) {
  $data = json_decode($_POST['data']);
  $id = getUserId($db, $data['email']);
  $type = pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION);
  $newName = $_FILES['image']['name'] . date("Ymdhis") . mt_rand() . $type;
  move_uploaded_file($_FILES['image']['tmp_name'], "./images/" . $id . "/" . $newName);
  echo "Sikeres";
} else {
  echo "Sikertelen";
}
?>*/
/*
$data = json_decode($_POST['data']);
$id = getUserId($db, $data['email']);
$image = $data['image'];
$type = pathinfo($image['name'], PATHINFO_EXTENSION);
  $newName = $image['name'] . date("Ymdhis") . mt_rand() . $type;
  move_uploaded_file($image['tmp_name'], "./images/" . $id . "/" . $newName);

  echo "Képes";*/
echo "asd2";
$data = $_POST['data'];
//print_r($data['_parts'][1][1]);
print_r($_POST);
print_r($_FILES);
