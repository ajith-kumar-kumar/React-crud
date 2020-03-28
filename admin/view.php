<?php 
require 'connect.php';
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');

header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

$data=[];
$sql="SELECT * FROM students";

if($result = mysqli_query($con,$sql)){
    $i=0;
    while($row=mysqli_fetch_array($result)){
        $data[$i]['id']       = $row['id'];
        $data[$i]['name']     = $row['name'];
        $data[$i]['email']    = $row['email'];
        $data[$i]['pass']     = $row['pass'];
        $data[$i]['dob']      = $row['dob'];
        $data[$i]['color']    = $row['color'];
        $data[$i]['number']   = $row['mobile'];
        $data[$i]['gender']   = $row['gender'];
        $data[$i]['m_status'] = $row['m_status'];
        $data[$i]['address']  = $row['address'];
        $data[$i]['image']    = $row['image'];
        $i++;
    }
    echo json_encode($data);
}else
   echo "something went wrong";

?>