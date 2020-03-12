<?php 
$data = $_POST['data'];
$data = json_decode($data,true);
print_r($data);