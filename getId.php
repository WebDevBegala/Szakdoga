<?php
function getUserId($db,$email){
    $getUserId = "SELECT `id` FROM `users` WHERE `email` = '".$email."' LIMIT 1 " ;

    if($result=$db->query($getUserId)) {
        $result = $result->fetch_all(MYSQLI_ASSOC);
       return($result[0]["id"]);
    
    } else {
        echo "0 results";
    } 
}

?>