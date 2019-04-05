<?php

    $db = mysqli_connect('localhost', 'root', '', 'faststart');
    mysqli_set_charset($db, 'utf8');

    $sql = "INSERT INTO clients_head (id, fio, email, comment) VALUE (NULL, '{$_POST['fio']}', '{$_POST['email']}', '{$_POST['comment']}')";
    $result = mysqli_query($db, $sql);

    if ($result){
        echo "всё ок";
    }else{
        echo "чё-то не то";
    }