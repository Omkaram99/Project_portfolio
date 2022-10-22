<?php
$ipAddress = $_SERVER['REMOTE_ADDR'];
date_default_timezone_set('Asia/Kolkata');
$datetime = date("d-m-Y H:i:s (h:i:s a)");
$browser = $_SERVER['HTTP_USER_AGENT'];



$name = $_POST['contact_name'];
$message = $_POST['contact_message'];
$conn = new mysqli('MySQL Host Name','MySQL User Name','password','MySQL DataBase Name');
if($conn -> connect_error ){
  echo "<!DOCTYPE html><html><body><h1 id='chick'>error</h1></body></html>";
}

else{

  $stmt = $conn->prepare("insert into contactMessage(name,message,datetime,ipAddress,browser) values(?,?,?,?,?)");

    
    $stmt ->bind_param("sssss",$name,$message,$datetime,$ipAddress,$browser);
    $stmt ->execute();
  echo "<!DOCTYPE html><html><body><h1 id='chick'>ok</h1><h2>contact</h2></body></html> ";
    $stmt->close();
    $conn->close();
}
?>