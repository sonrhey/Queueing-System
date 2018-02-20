<?php
require_once "dbconfig.php";
$dateToday = date("Y-m-d", strtotime('+8 hours'));
$result = [];

$getNumbers = "SELECT id,qn_queued_number as qn_number, status FROM queued_numbers_display WHERE status = 0 OR status = 1 AND dateTime_ LIKE '%{$dateToday}%' ORDER BY dateTime_ DESC LIMIT 5";
$getNumbers = $conn->query($getNumbers);

while($row = mysqli_fetch_assoc($getNumbers)){
	$result[] = $row;
}

echo json_encode($result);