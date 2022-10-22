<?php
$ipAddress = $_SERVER['REMOTE_ADDR'];
date_default_timezone_set('Asia/Kolkata');
$datetime = date("d-m-Y H:i:s (h:i:s a)");
$browser = $_SERVER['HTTP_USER_AGENT'];


$name = $_POST['fullname(hire)'];
$email = $_POST['email(hire)'];
$mobile = $_POST['mobile_no(hire)'];
$mobilecode = $_POST['mobile_code(hire)'];

$compeny = $_POST['compenyname(hire)'];

$jobroll = $_POST['jobroll(hire)'];
$ctca = $_POST['ctcpa(hire)'];
$currentcy = $_POST['currentcy'];
$hiremessage = $_POST['hire_message(hire)'];


$conn = new mysqli('MySQL Host Name','MySQL User Name','password','MySQL DataBase Name');

if($conn -> connect_error ){
  echo "<!DOCTYPE html><html><body><h1 id='chick'>error</h1></body></html>";
}
else{
   $stmt = $conn->prepare("insert into hireMe(name,email,mobile,mobileCode,companyName,jobRoll,ctca,currency,message,datetime,ipAddress,browser) values(?,?,?,?,?,?,?,?,?,?,?,?)");
    $stmt ->bind_param("ssssssssssss",$name,$email,$mobile,$mobilecode,$compeny,$jobroll,$ctca,$currentcy,$hiremessage,$datetime,$ipAddress,$browser);
    $stmt ->execute();
  echo "<!DOCTYPE html><html><body><h1 id='chick'>ok</h1><h2>hireme</h2></body></html> ";
    $stmt->close();
    $conn->close();
}
?>