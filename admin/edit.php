<?php
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');

header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require 'connect.php';
$id=$_GET['id'];

$sql="SELECT * From students Where id='$id'";
$res=mysqli_query($con,$sql);
$row=mysqli_fetch_assoc($res);
echo $json= json_encode($row);
exit;

?>