<?php

  try{
    require_once '../config.php';
 $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    
    catch(Exception $e){
        $error = $e->getMessage();
    }
    
    
  
    
    $delsql = 'DELETE FROM breweries WHERE idnum=?';
    $result = $db->prepare($delsql);
    $res = $result->execute(array($_GET['idnum']));
    
    
    if($res){
        header('Location: index.php');
    }else{
        echo "failed to delete entry";
    }
?>