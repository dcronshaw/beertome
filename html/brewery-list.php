 <?php
   require 'config.php'; 
   ?>
<!DOCTYPE HTML>
<!--
	Verti by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
	<head>
		<title>Beer to Me | Brewery List</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="../assets/css/main.css" />
	</head>
	<body class="is-preload homepage">
    <main>
   

		<div id="page-wrapper">

			<!-- Header -->
				<div id="header-wrapper">
					<header id="header" class="container">

						<!-- Logo -->
							<div id="logo">
								<h1>Beer to Me BC</h1>
							</div>

						<!-- Nav -->
							<nav id="nav">
								<ul>
									 <li><a href="index.php">Home</a></li>
                  <li><a href="map.php">Map</a></li>
									<li class="current"><a href="#">Brewery List</a></li>
								</ul>
							</nav>

					</header>
				</div>

			<!-- Banner -->
				<div id="banner-wrapper">
          <div id="yes">
					<div class="maindiv">
            <table>
            <tr>
            <th class="hideme">#</th>  
            <th class="boldme">Brewery Name</th>
            <th class="boldme">Delivery Area</th>
            <th class="hideme">#</th>  
            </tr>
              
              <!-- grabs the list of breweries from mysql-->
            <?php
            $sql = "SELECT * FROM breweries";
            $res = $db->query($sql);
            while ($r = $res->fetch(PDO::FETCH_ASSOC)){ ?>
            <tr>
              <th class="hideme"><?php echo $r['idnum'];?></th>
              <th><?php echo $r['name'];?></th>
               <th><?php echo $r['deliveryarea'];?></th>
              <th><?php echo $r['deliveryinfo'];?></th>
            </tr>
              <?php } ?>
          </div>    
        </div>
				</div>
          </main>

			

			<!-- Footer -->
				
					<footer id="footer" class="container">
            						<div class="row">
							<div class="col-12">
								<div id="copyright">
								</div>
							</div>
						</div>
            </div>
						
					</footer>
    
				

		

		<!-- Scripts -->

			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.dropotron.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

	</body>
</html>