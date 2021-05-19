<?php
session_start();

try{
  
require_once('../config.php');
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}

catch(Exception $e){
    $error = $e->getMessage();
}

$selectsql = "SELECT * FROM breweries WHERE idnum=?";
$selresult = $db->prepare($selectsql);
$selres = $selresult->execute(array($_GET['idnum']));
$r = $selresult->fetch(PDO::FETCH_ASSOC);

if(isset($_POST) && !empty ($_POST)){
    //!empty true if not true

    $sql = "UPDATE breweries set name=:name, deliveryarea=:deliveryarea, deliveryinfo=:deliveryinfo WHERE idnum=:id";

    $result = $db->prepare($sql);
    $res = $result->execute(array(':name' => $_POST['name'],
                                ':deliveryarea' => $_POST['deliveryarea'],
                                ':deliveryinfo' => $_POST['deliveryinfo'],
                                ':id' => $_GET['idnum']
                        
    
                               ));
//
if($res){
    echo "successfully inserted data";
    $selectsql = "SELECT * FROM breweries WHERE idnum=?";
$selresult = $db->prepare($selectsql);
$selres = $selresult->execute(array($_GET['idnum']));
$r = $selresult->fetch(PDO::FETCH_ASSOC);

//somehow Geoff was right.

header("Location: index.php");

}else {
    echo "failed to insert";
}
}
?>
 		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="../assets/css/main.css" />
  <style>
    th{
     padding:1em;
    }
    
    .hideme{
      display:none;
    }
</style>
<form  method="post">
  
    <label>Name</label>
    <input type=text name="name" value="<?php echo $r['name'];?>"/>  
    <label>Delivery area</label>
    <input type=text name="deliveryarea" value="<?php echo $r['deliveryarea'];?>"/>
    <label>Last Name</label>
    <input type=text name="deliveryinfo" value="<?php echo $r['deliveryinfo'];?>"/>
    <input type="submit" value="Edit"/>
</form>