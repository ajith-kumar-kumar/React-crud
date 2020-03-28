<?php
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');

header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require 'connect.php';

if((isset($_POST) && !empty($_POST))){
    // print_r($_POST);
    $id=mysqli_real_escape_string($con,$_POST['id']);
    $name= mysqli_real_escape_string($con,$_POST['name']);
    $email=mysqli_real_escape_string($con,$_POST['email']);
    $dob=mysqli_real_escape_string($con,$_POST['dob']);
    $pass =mysqli_real_escape_string($con,$_POST['pass']);
    $color = mysqli_real_escape_string($con,$_POST['color']);
    $number=mysqli_real_escape_string($con,$_POST['mobile']);
    $gender=mysqli_real_escape_string($con,$_POST['gender']);
    $m_status=mysqli_real_escape_string($con,$_POST['m_status']);
    $address=mysqli_real_escape_string($con,$_POST['address']);

    $pass=md5($pass);
    
    $response= array();
    $upload_dir='uploads/'; 
    $random_name='';
    $server_url="http://127.0.0.1:8000";

    if(isset($_POST['avatar'])){
        $random_name=$_POST['avatar'];
    }else{
        if($_FILES['avatar']){
            $avatar_name = $_FILES["avatar"]["name"];
            $avatar_tmp_name = $_FILES["avatar"]["tmp_name"];
            $error = $_FILES["avatar"]["error"];
            if($error > 0){
                $response = array(
                    "status" => "error",
                    "error" => true,
                    "message" => "Error uploading the file!"
                );
            }else 
            {
                $random_name = rand(1000,1000000).".jpg";
                $upload_name = $upload_dir.strtolower($random_name);
                $upload_name = preg_replace('/\s+/', '-', $upload_name);
    
                $sql1="SELECT * FROM students WHERE id='$id'";
    
                $query=mysqli_query($con,$sql1);
                $res=mysqli_fetch_assoc($query);
    
                if(unlink('uploads/'.$res['image'])){
            
                    if(move_uploaded_file($avatar_tmp_name , $upload_name)) {
                        $response = array(
                            "status" => "success",
                            "error" => false,
                            "message" => "File uploaded successfully",
                            "url" => $server_url."/".$upload_name
                        );
                    }else
                    {
                        $response = array(
                            "status" => "error",
                            "error" => true,
                            "message" => "Error uploading the file!"
                        );
                    }
    
                }
                
            } 
        }   
    }


    $sql="UPDATE `students` SET `name`= '$name',`email`='$email',`pass`='$pass',`dob`='$dob',
    `mobile`='$number',`color`= '$color',`gender`='$gender',`m_status`='$m_status',`image`='$random_name',`address`='$address' WHERE id='$id'";

    if(mysqli_query($con,$sql)){
        echo 1;
    }else{
        echo 0;
    }
    
}
?>