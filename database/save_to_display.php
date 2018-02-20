<?php
require_once "dbconfig.php";

$status = 0;
$buttonVal = $_REQUEST['buttonVal'];
$dateTime = date("Y-m-d H:i:s", strtotime('+8 hours'));

	$save2Display = "INSERT INTO queued_numbers_display(qn_queued_number, status, dateTime_) VALUES ('$buttonVal', $status, '$dateTime')";
	$save2Display = $conn->query($save2Display);

	if(!$save2Display){
	echo mysqli_error($conn);
	}else{
		$update = "UPDATE queeuing SET served = 1 WHERE quee = '$buttonVal'";
		$update = $conn->query($update);
		echo 0;
	}
