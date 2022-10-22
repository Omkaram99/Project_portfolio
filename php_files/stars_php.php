<?php
$ipAddress = $_SERVER['REMOTE_ADDR'];
date_default_timezone_set('Asia/Kolkata');
$datetime = date("d-m-Y H:i:s (h:i:s a)");
$browser = $_SERVER['HTTP_USER_AGENT'];



$rating = $_POST['star_rating'];

$conn = new mysqli('MySQL Host Name','MySQL User Name','password','MySQL DataBase Name');
if($conn -> connect_error ){
  echo "<!DOCTYPE html><html><body><h1 id='chick'>error</h1></body></html>";
}

else{

  $stmt = $conn->prepare("insert into starRating(datetime,rating,ipAddress,browser) values(?,?,?,?)");

    
    $stmt ->bind_param("ssss",$datetime,$rating,$ipAddress,$browser);
    $stmt ->execute();
  echo "<!DOCTYPE html><html><body><h1 id='chick'>rated</h1><h2></h2></body></html> ";
    $stmt->close();
    $conn->close();
}
?>