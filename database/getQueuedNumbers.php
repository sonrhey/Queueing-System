<?php
require_once "dbconfig.php";

$result = [];
$getNumbers = "SELECT queued_number FROM queued_numbers WHERE status = 0 ORDER BY dateTime DESC LIMIT 5";
$getNumbers = $conn->query($getNumbers);


while($row = mysqli_fetch_assoc($getNumbers)){
$result[] = $row;
}

echo json_encode($result);