<?php
require_once "dbconfig.php";
$createdate= date('Y-m-d H:i:s', strtotime('+8 hours'));
@$inputFile = $_FILES['choosefile']['name'];
@$success = "";
$fileLength = count($inputFile);
	
	for($i=0;$i<$fileLength;$i++){
	@$name = basename($_FILES["choosefile"]["name"][$i]);
	@$tmp_name = $_FILES["choosefile"]["tmp_name"][$i];

	$img_path = "img/".$name;
	$insert = "INSERT INTO ads (img_path, dateTime_) VALUES('$img_path', '$createdate')";
	$conn->query($insert);
	$folder = "../img/";
	if(move_uploaded_file($tmp_name, $folder.$name)){
		$success = "Success, File(s) uploaded successfully.";
	}

	}

	echo $success;
	