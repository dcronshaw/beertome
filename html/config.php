<!-- Connect to the mysql database -->

<?php
$dsn = 'mysql:host=localhost;dbname=breweries';
$db = new PDO ($dsn, 'root', 'Lembem');
?>