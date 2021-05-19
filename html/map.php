<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Beer to Me | Map</title>
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
   <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
   integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
   crossorigin=""/>
		<link rel="stylesheet" href="assets/css/main.css" />
   <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
   integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
   crossorigin=""></script>
</head>
<body>
  <body class="is-preload homepage">
		<div id="page-wrapper">

			<!-- Header -->
				<div id="header-wrapper">
					<header id="header" class="container">

						<!-- Logo -->
							<div id="logo">
							<h1><a href="index.html">Beer to Me BC</a></h1>
							</div>

						<!-- Nav -->
							<nav id="nav">
								<ul>
                  <li><a href="index.php">Home</a></li>
                  <li class="current"><a href="#">Map</a></li>
									<li><a href="brewery-list.php">Brewery List</a></li>
									
								</ul>
							</nav>

					</header>
				</div>

			<!--Leaflet uses this div to serve its map. -->
      
				<div id="banner-wrapper">
					
						<div id="mapid" class="box container">
          
          </div>
            
					
				</div>


			<!-- Footer -->
				
					<footer id="footer" class="container">
            						<div class="row">
							<div class="col-12">
								<div id="copyright">
									<ul class="menu">
										<li>&copy; DCronshaw 2020</li>
									</ul>
								</div>
							</div>
						</div>
						
					</footer>
			

			</div>

		<!-- Scripts -->

			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.dropotron.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>
      <script src="assets/map.js"></script>
	</body>
</html>
 
  
