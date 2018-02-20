<?php
require_once "dbconfig.php";

$result = [];
$getNumbers = "SELECT quee as queued_number FROM queeuing WHERE served = 0 ORDER BY ord_num ASC";
$getNumbers = $conn->query($getNumbers);

if($getNumbers->num_rows>0){
	while($row = mysqli_fetch_assoc($getNumbers)){
	$result[] = $row;
	}
	echo json_encode($result);
}

