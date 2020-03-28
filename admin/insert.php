<?php 

require 'connect.php';
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');

header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
// $post_data = file_get_contents("php://input");
// print_r($_POST);
if(isset($_POST)){
  
    $name     = $_POST['name'];
    $email    = $_POST['email'];
    $pass     = md5($_POST['pass']);
    $dob      = $_POST['dob'];
    $color    = $_POST['color'];
    $mobile   = $_POST['number'];
    $gender   = $_POST['gender'];
    $m_status = $_POST['m_status'];
    $address  = $_POST['address'];

    

    $response= array();
    $upload_dir='uploads/';
    $random_name='';
    $server_url="http://127.0.0.1:8000";
    
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

    $sql="INSERT INTO `students` (`name`,`email`,`pass`,`dob`,`color`,`mobile`,`gender`,`m_status`,`address`,`image`)
     VALUES ('$name','$email','$pass','$dob','$color','$mobile','$gender','$m_status','$address','$random_name')";

    if(mysqli_query($con,$sql)){
        echo 1;
    }else{
        echo 0;
    }

}

?>