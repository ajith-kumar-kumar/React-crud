<?php 
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');

header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require 'connect.php';
$id=$_GET['id'];
$sql1="SELECT * FROM students WHERE id='$id'";
$sql2="DELETE FROM students WHERE id='$id'";

$query=mysqli_query($con,$sql1);

$result=mysqli_fetch_assoc($query);
 if(unlink("uploads/".$result['image'])){
    echo "file deleted";
    $query2=mysqli_query($con,$sql2);
    if($query2){
        echo 1;
    }else{
        echo 0;
    }
}else{
    echo "error";
}





?>