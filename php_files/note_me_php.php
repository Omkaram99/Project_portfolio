<?php
$ipAddress = $_SERVER['REMOTE_ADDR'];
$browser = $_SERVER['HTTP_USER_AGENT'];
date_default_timezone_set('Asia/Kolkata');
$datetime = date("d-m-Y H:i:s (h:i:s a)");



$visitedpage = $_POST['visited'];

$conn = new mysqli('MySQL Host Name','MySQL User Name','password','MySQL DataBase Name');
if($conn -> connect_error ){
  echo "<!DOCTYPE html><html><body><h1 id='chick'>error</h1></body></html>";
}

else{

  $stmt = $conn->prepare("insert into visitedList(datetime,visitedPage,ipAddress,browser) values(?,?,?,?)");

    
    $stmt ->bind_param("ssss",$datetime,$visitedpage,$ipAddress,$browser);
    $stmt ->execute();
  echo "<!DOCTYPE html><html><body><h1 id='chick'>noted</h1><h2></h2></body></html> ";
    $stmt->close();
    $conn->close();
}
?>