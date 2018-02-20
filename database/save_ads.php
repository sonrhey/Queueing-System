<?php
require_once "dbconfig.php";
require_once "resized_image.php";

$imgVal = $_FILES["img_ads"]["name"]; 
$imgTxt = "img/".$imgVal;
$createdate= date('Y-m-d H:i:s', strtotime('+8 hours'));

$uploadDir = "../img/";
$uploadFile = $uploadDir . basename($_FILES['img_ads']['name']);

$sourcefile= $_FILES['img_ads']['tmp_name'];
$endfile= $uploadFile;
$type=$_FILES['img_ads']['type'];

makeThumbnail($sourcefile, $max_width=980, $max_height=490, $endfile, $type);

$insert = "INSERT INTO ads (img_path, dateTime_) VALUES('$imgTxt', '$createdate')";
$conn->query($insert);
if($conn){
	echo "success";
}