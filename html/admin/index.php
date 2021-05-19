<?php
   require '../config.php'; 
   ?>
<!DOCTYPE HTML>
<!--
	Verti by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
	<head>
		<title>Beer to Me | Admin</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="../assets/css/main.css" />
    <style>
    
    </style>
	</head>
	<body class="is-preload homepage">
   

		<div id="page-wrapper">

			<!-- Header -->
				<div id="header-wrapper">
					<header id="header" class="container">

						<!-- Logo -->
							<div id="logo">
								<h1>Beer to Me BC</h1>
							</div>



					</header>
				</div>
      <?php
  if(isset($_POST["new"]) && !empty($_POST)){
   $sql = "INSERT INTO breweries (name,deliveryarea,deliveryinfo) VALUES (:name,:deliveryarea,:deliveryinfo);";
  
  $result = $db->prepare($sql);
  $res = $result->execute(array(
                               ':name' => $_POST['name'],
                              ':deliveryarea' => $_POST['deliveryarea'],
                               ':deliveryinfo' => $_POST['deliveryinfo']));
                             
                              
      
  if($res){
  header("Location: index.php")    ;
  }else{
    echo "please try again";
  }
  }

  ?>
      
      <form action =# method="post">
        <input type="text" name="name" placeholder="name">
        <input type="text" name="deliveryarea" placeholder="delivery area">
        <input type="text" name="deliveryinfo" placeholder="delivery info">
        <input type="submit" name="new" value="new">       
      </form>

			<!-- Banner -->
      
      <!-- pulls info from the mysql database -->
				<div id="banner-wrapper">
          <div id="yes">
					<div>
            <table id="admin">
            <tr>
            <th class="hideme">#</th>  
            <th class="boldme">Brewery Name</th>
            <th class="boldme">Delivery Area</th>
            <th class="hideme">#</th>  
            </tr>
              
            <?php
            $sql = "SELECT * FROM breweries";
            $res = $db->query($sql);
            while ($r = $res->fetch(PDO::FETCH_ASSOC)){ ?>
            <tr>
              <th class="hideme"><?php echo $r['idnum'];?></th>
              <th><?php echo $r['name'];?></th>
               <th><?php echo $r['deliveryarea'];?></th>
              <th><?php echo $r['deliveryinfo'];?></th>
              <th><a href="delete.php?idnum=<?php echo $r['idnum'];?>">Delete</a></th>
              <td><a href="update.php?idnum=<?php echo $r['idnum'];?>">Edit</a></td>
            </tr>
              <?php } ?>
          </div>    
        </div>
				</div>

			

			<!-- Footer -->
				<div id="footer-wrapper">
					<footer id="footer" class="container">
						
					</footer>
				</div>

			</div>

		<!-- Scripts -->

			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.dropotron.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

	</body>
</html>