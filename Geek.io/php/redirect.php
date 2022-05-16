<?php
$login = $_POST['login'];
    if($login > 0){
        $login = TRUE;
    }else{
        $login = FALSE;
    }
    if($login == TRUE){
        header('refresh:3; url=user.html');
    }else{
        header('refresh:3; url=login.html');
    }
?>