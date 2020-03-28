<?php 
define('DB_HOST','localhost');
define('DB_USER','root');
define('DB_PASS','');
define('DB_NAME','react_crud');

function connect(){
    $con = mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME);
    if(!$con){
        die("conection failed".mysqli_error());
    }
    return $con;
}

$con=connect();

?>