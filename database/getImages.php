<?php
require_once "dbconfig.php";

$getImages = "SELECT img_path, id FROM ads";
$getImages = $conn->query($getImages);
$result = [];
while($row = mysqli_fetch_assoc($getImages)){
$result[] = $row;
}

echo json_encode($result);