//geoJSON to plot points on the map 
var someFeatures = [{
  "type": "featureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "3 Dogs Brewing",
        "deliveryarea": "White Rock and South Surrey",
        "deliveryinfo": "236-858-7185"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.801851,
          49.029437
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "33 Acres Brewing Co",
        "deliveryarea": "Vancouver",
        "deliveryinfo": "<a href ='https://shop.33acresbrewing.com'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.108237,
          49.263935
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "A-Frame Brewing Co",
        "deliveryarea": "Squamish",
        "deliveryinfo": "<a href='tel:604-892-0777'>604-892-0777</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.157814,
          49.717464
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Ace Brewing Company",
        "deliveryarea": "Comox Valley",
        "deliveryinfo": "<a href='www.acebrewing.ca'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -124.982021,
          49.677954
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Andina Brewing",
        "deliveryarea": "Vancouver",
        "deliveryinfo": "<a href ='https://www.skipthedishes.com/andina-brewing'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.073592,
          49.283352
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Another Beer Co",
        "deliveryarea": "New Westminster and surrounding area",
        "deliveryinfo": "<a href ='https://anotherbeerco.com/store'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.888081,
          49.225664
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Arrowhead Brewing Company",
        "deliveryarea": "Columbia Valley",
        "deliveryinfo": "<a href ='https://www.facebook.com/Arrowhead-Brewing-Company-364956420200389/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.009689,
          50.51667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Backcountry Brewing",
        "deliveryarea": "Squamish",
        "deliveryinfo": "<a href ='https://backcountrybrewing.square.site/shop/local-pickup-or-delivery/13'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.156424,
          49.723789
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Backroads Brewing Co",
        "deliveryarea": "Nelson and surrounding area",
        "deliveryinfo": "<a href='tel:778-463-3361'>778-463-3361</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.296481,
          49.488048
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Bad Dog Brewing Company",
        "deliveryarea": "Sooke and Greater Victoria",
        "deliveryinfo": "<a href='mailto:info@baddogbrewing.ca'>Email Order</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.785307,
          48.402262
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Barkerville Brewing",
        "deliveryarea": "Quesnel",
        "deliveryinfo": "<a href ='https://barkervillebeer.com/deliveries/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.495293,
          52.975238
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Barn Owl Brewing",
        "deliveryarea": "Kelowna",
        "deliveryinfo": "<a href ='https://www.barnowlbrewing.ca/local/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.496091,
          49.816859
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Beach Fire Brewing",
        "deliveryarea": "Campbell River and Quadra Island",
        "deliveryinfo": "<a href ='https://beach-fire-brewing-company.square.site/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -125.250397,
          50.026417
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Beere Brewing Co",
        "deliveryarea": "North Shore",
        "deliveryinfo": "<a href ='https://www.beerebrewing.com/beerstore/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.07488,
          49.308386
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Big Rock Vancouver",
        "deliveryarea": "Lower Mainland",
        "deliveryinfo": "<a href ='https://store.bigrockbeer.com/beer-cider/vancouver/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.113384,
          49.267234
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Bomber Brewing",
        "deliveryarea": "Vancouver and North Shore",
        "deliveryinfo": "<a href ='https://bomberbrewing.com/collections/all'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.076751,
          49.277431
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Brewhall",
        "deliveryarea": "Vancouver",
        "deliveryinfo": "<a href ='https://brewhall.com/shop/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.105701,
          49.269454
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Bridge Brewing Company",
        "deliveryarea": "Lower Mainland",
        "deliveryinfo": "<a href ='https://www.bridgebrewingstore.com/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.033914,
          49.310145
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Burton City Cider",
        "deliveryarea": "Burton Area",
        "deliveryinfo": "<a href ='https://store.burtoncitycider.ca/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.881651,
          49.991235
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "BX Press",
        "deliveryarea": "Vernon Area",
        "deliveryinfo": "<a href ='https://the-bx-press-inc.square.site/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.225009,
          50.279824
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Callister Brewing",
        "deliveryarea": "Vancouver",
        "deliveryinfo": "<a href ='https://callisterbrewing.square.site/s/order'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.078376,
          49.282074
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Category 12 Brewing",
        "deliveryarea": "Greater Victoria",
        "deliveryinfo": "<a href ='https://category12beer.square.site/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.410108,
          48.565388
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Ceder Cider",
        "deliveryarea": "North Vancouver to Chilliwack",
        "deliveryinfo": "<a href ='https://cedarcider.square.site/s/order'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.713526,
          49.007222
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Ciderworks",
        "deliveryarea": "Saltspring Island and Vancouver Island",
        "deliveryinfo": "<a href='tel:250-538-2197'>250-5380-2197</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.493253,
          48.837425
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Cliffside Brewing",
        "deliveryarea": "Nanaimo",
        "deliveryinfo": "<a href ='https://my-site-104152-102705.square.site/#XxWzul'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.942376,
          49.169683
        ]
      }
    },
    
    {
      "type": "Feature",
      "properties": {
        "name": "Coast Mountain Brewing",
        "deliveryarea": "Squamish to Pemberton",
        "deliveryinfo": "<a href ='https://coastmountainbeer.square.site'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.040238,
          50.089178
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Container Brewing",
        "deliveryarea": "North Shore to New West",
        "deliveryinfo": "<a href ='https://www.drinkcontainer.beer/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.080864,
          49.282176
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Copper Brewing Co",
        "deliveryarea": "Kelowna Area",
        "deliveryinfo": "<a href='tel:250-878-4118'>250-878-4118</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.459957,
          49.880318
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Crossroads Brewing",
        "deliveryarea": "Prince George",
        "deliveryinfo": "<a href='tel:250-614-2337'>250-614-2337</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.745918,
          53.914287
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Dageraad Brewing",
        "deliveryarea": "Vancouver Area",
        "deliveryinfo": "<a href='webstore.dageraadbrewing.com'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.919634,
          49.256857
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Detonate Brewing",
        "deliveryarea": "Osoyoos to Vernon",
        "deliveryinfo": "<a href ='https://shop.detonatebrewing.com'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.680093,
          49.587257
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Dog Mountain Brewing",
        "deliveryarea": "Alberni Valley",
        "deliveryinfo": "<a href='250-668-4765'>250-668-4765</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -124.707063,
          49.269988
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Driftwood Brewery",
        "deliveryarea": "Greater Victoria and Vancouver",
        "deliveryinfo": "<a href ='https://shop.driftwoodbeer.com/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.376436,
          48.436956
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "East Vancouver Brewing Company",
        "deliveryarea": "North Shore to Burnaby",
        "deliveryinfo": "<a href ='https://my-site-106257.square.site/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.07329,
          49.276784
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Electric Bicycle Brewing Co",
        "deliveryarea": "Vancouver",
        "deliveryinfo": "<a href ='https://www.skipthedishes.com/electric-bicycle-brewing'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.106445,
          49.267233
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Faculty Brewing Co",
        "deliveryarea": "Vancouver",
        "deliveryinfo": "<a href ='https://beervan.square.site/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.106733,
          49.268665
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Farm Country Brewing",
        "deliveryarea": "Langley area",
        "deliveryinfo": "<a href ='https://farmcountrybrewing.square.site/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.653775,
          49.10493
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Firehall Brewing",
        "deliveryarea": "Osoyoos to Penticton",
        "deliveryinfo": "<a href='firehallbrewery.com/shop'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.552582,
          49.181517
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Foamers' Folly Brewing Co",
        "deliveryarea": "Pitt Meadows and Maple Ridge",
        "deliveryinfo": "<a href ='https://foamers-folly.myshopify.com/collections/beer'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.691239,
          49.224847
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Four Winds Brewing",
        "deliveryarea": "Delta",
        "deliveryinfo": "<a href ='https://shop.fourwindsbrewing.ca/collections/lunch-food-beer'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.029203,
          49.136236
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Gladstone Brewing",
        "deliveryarea": "Comox Valley",
        "deliveryinfo": "<a href ='https://www.gladstoneorders.ca/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -125.000231,
          49.691871
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Highway 97 Brewing",
        "deliveryarea": "Penticton",
        "deliveryinfo": "<a href='tel:778-996-6875'>778-996-6875</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.612097,
          49.494224
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "House of Funk Brewing",
        "deliveryarea": "North Shore and Vancouver",
        "deliveryinfo": "<a href ='https://www.houseoffunkbrewing.com/shop'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.073552,
          49.307756
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Howl Brewing",
        "deliveryarea": "Greater Victoria",
        "deliveryinfo": "<a href='tel:778-977-4695'>778-977-4695</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.428253,
          48.656322
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Kettle River Brewing Co",
        "deliveryarea": "Kelowna",
        "deliveryinfo": "<a href='tel:250-862-5115'>250-862-5115</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.489514,
          49.896257
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Land & Sea Brewing Company",
        "deliveryarea": "Comox Valley",
        "deliveryinfo": "<a href='tel:250-941-5577'>250-941-5577</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -124.939254,
          49.687923
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Longwood Brewery",
        "deliveryarea": "Nanaimo Area",
        "deliveryinfo": "<a href ='https://delivery.longwoodbeer.com/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.995819,
          49.186793
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Luppolo Brewing Company",
        "deliveryarea": "North Shore to New West",
        "deliveryinfo": "<a href ='https://www.beervan.ca/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.082797,
          49.277029
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Main Street Brewing",
        "deliveryarea": "Vancouver",
        "deliveryinfo": "<a href ='https://www.skipthedishes.com/main-street-brewing-company'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.101493,
          49.264731
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Maple Meadows Brewing",
        "deliveryarea": "Maple Ridge and Pitt Meadows",
        "deliveryinfo": "<a href ='https://store.mmbrewing.ca/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.59333,
          49.220743
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Mariner Brewing",
        "deliveryarea": "Lower Mainland",
        "deliveryinfo": "<a href ='https://www.marinerbrewingstore.ca/collections/beer'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.811947,
          49.277352
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Moody Ales",
        "deliveryarea": "Tri-Cities",
        "deliveryinfo": "<a href ='https://moodyales.square.site/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.85652,
          49.278599
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Moon Under Water Brewery",
        "deliveryarea": "Victoria",
        "deliveryinfo": "<a href='tel:250-380-0706'>250-380-0706</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.37768,
          48.435223
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Mount Arrowsmith Brewing",
        "deliveryarea": "Parksville and Nanaimo Area",
        "deliveryinfo": "<a href='http://www.arrowsmithbrewing.com/shop'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -124.301249,
          49.316083
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Mt Begbie Brewing",
        "deliveryarea": "Revelstoke",
        "deliveryinfo": "<a href='tel:250-837-2756'>250-837-2756</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.167427,
          50.995097
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "New Tradition Brewing",
        "deliveryarea": "Comox Valley",
        "deliveryinfo": "<a href='tel:236-362-2022'>236-362-2022</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -124.926221,
          49.673357
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "North Point Brewing",
        "deliveryarea": "North Shore",
        "deliveryinfo": "<a href ='https://www.northpointbrewing.com/retail'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.075157,
          49.309693
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Off The Rail Brewing Co",
        "deliveryarea": "Vancouver",
        "deliveryinfo": "<a href='tel:604-563-5767'>604-563-5767</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.078208,
          49.277809
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Old Abbey Ales",
        "deliveryarea": "Abbotsford",
        "deliveryinfo": "<a href='tel:604-607-5104'>604-607-5104</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.385539,
          49.056408
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Old Yale Brewing",
        "deliveryarea": "Chilliwack and surrounding area",
        "deliveryinfo": "<a href ='https://old-yale-brewing.myshopify.com/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.051239,
          49.115544
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Parallel 49 Brewing",
        "deliveryarea": "Vancouver",
        "deliveryinfo": "<a href='tel:604-558-2739'>604-558-2739</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.06655,
          49.283838
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Pemberton Brewing Co",
        "deliveryarea": "Pemberton and Whistler",
        "deliveryinfo": "<a href='mailto:j@pembertonbrewing.ca'>Email Order</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.730105,
          50.314745
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Persephone Brewing",
        "deliveryarea": "Sunshine Coast",
        "deliveryinfo": "<a href='shorturl.at/aeou2'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.510441,
          49.420733
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Phillips Brewing",
        "deliveryarea": "Greater Victoria",
        "deliveryinfo": "<a href='tel:250-380-1912'>250-380-1912</a> Extension 2"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.369587,
          48.43201
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Powell Brewery",
        "deliveryarea": "North Vancouver to Coquitlam",
        "deliveryinfo": "<a href ='https://powellbeer.square.site/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.07797,
          49.283327
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Ravens Brewing Company",
        "deliveryarea": "Abbotsford",
        "deliveryinfo": "<a href ='https://www.ravens.beer/store?category=Beer'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.362707,
          49.047485
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Red Arrow Brewing",
        "deliveryarea": "Cowichan Valley",
        "deliveryinfo": "<a href='tel:250-597-0037'>250-597-0037</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.692497,
          48.762776
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Red Collar Brewing",
        "deliveryarea": "Kamloops",
        "deliveryinfo": "<a href ='https://red-collar-brewing-distilling.myshopify.com/collections/all'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.335025,
          50.676453
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Riot Brewing Co",
        "deliveryarea": "Vancouver Island",
        "deliveryinfo": "<a href='riotbrewing.square.site'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.730334,
          48.926441
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Rossland Beer Company",
        "deliveryarea": "Trail, Warfield and Rossland",
        "deliveryinfo": "<a href='tel:259-362-2122'>259-362-2122</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.802907,
          49.077465
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Rustic Reel Brewing Co",
        "deliveryarea": "Kelowna",
        "deliveryinfo": "<a href='mailto:sales@rusticreel.com'>Email Order</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.487953,
          49.894597
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Sea Cider",
        "deliveryarea": "Greater Victoria",
        "deliveryinfo": "<a href ='https://sea-cider-farm-ciderhouse.square.site/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.401641,
          48.603062
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Sherwood Mountain Brewhouse",
        "deliveryarea": "Terrace",
        "deliveryinfo": "Text <a href='tel:250-631-2600'>250-631-2600</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -128.603984,
          54.516091
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Silver Valley Brewing",
        "deliveryarea": "Maple Ridge and Pitt Meadows",
        "deliveryinfo": "<a href ='https://www.silvervalleybrewing.com/beer-n-stuff#bcqJjf'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.603742,
          49.219799
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Slackwater Brewing",
        "deliveryarea": "Penticton area",
        "deliveryinfo": "<a href ='https://slackwaterbrewing.com/collections/beers'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.596267,
          49.499892
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Slow Hand Beer Co",
        "deliveryarea": "Vancouver",
        "deliveryinfo": "<a href ='https://beervan.square.site/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.069435,
          49.284212
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Small Block Brewing Co",
        "deliveryarea": "Cowichan Valley",
        "deliveryinfo": "<a href ='https://store27270125.company.site/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.694776,
          48.764464
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Sooke Brewing Co",
        "deliveryarea": "Sooke",
        "deliveryinfo": "<a href='tel:250-642-0106'>250-642-0106</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.726511,
          48.378414
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Sooke Oceanside Brewing",
        "deliveryarea": "Sooke",
        "deliveryinfo": "<a href='tel:778-352-2739'>778-352-2739</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.661974,
          48.393167
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Stanley Park Brewing",
        "deliveryarea": "West End Vancouver",
        "deliveryinfo": "<a href ='https://stanleyparkbrewstore.com/collections/crowlers'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.148669,
          49.292327
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Steamworks Brewery",
        "deliveryarea": "North Shore to Burnaby",
        "deliveryinfo": "<a href ='https://www.steamworksproducts.com/s/shop'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.022335,
          49.274136
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Steel & Oak Brewing",
        "deliveryarea": " New West area",
        "deliveryinfo": "<a href ='https://steel-oak-brewing-co.myshopify.com/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.929616,
          49.201958
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Storm Brewing",
        "deliveryarea": "Vancouver",
        "deliveryinfo": "<a href ='https://www.stormbrewing.org/delivery'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.072339,
          49.282042
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Strange Fellows Brewing",
        "deliveryarea": "Vancouver",
        "deliveryinfo": "<a href ='https://strangefellowsbrewing.com/home-beer-delivery/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.080028,
          49.272533
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Strathcona Beer Co/Superflux",
        "deliveryarea": "Vancouver",
        "deliveryinfo": "<a href ='https://www.superfluxbeer.com/shop'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.097565,
          49.270037
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Streetcar Brewing",
        "deliveryarea": "North Shore",
        "deliveryinfo": "<a href ='https://streetcarbrewing.square.site/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.080308,
          49.31115
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Summerland Heritage Cider",
        "deliveryarea": "Vancouver Victoria & Okanagan",
        "deliveryinfo": "<a href ='https://summerlandcidershop.square.site/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.640684,
          49.571606
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Swans Brewery Pub and Hotel",
        "deliveryarea": "Victoria area",
        "deliveryinfo": "<a href ='https://swans.store/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.371571,
          48.428667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Tailout Brewing",
        "deliveryarea": "Castlegar",
        "deliveryinfo": "<a href='http://tailoutbrewing.com/online-orders/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.660033,
          49.299997
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Tapworks Brewing Co",
        "deliveryarea": "Gibsons",
        "deliveryinfo": "<a href ='https://www.gibsonstapworks.com/delivery'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.506976,
          49.40268
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "The Bricker Cider Company",
        "deliveryarea": "Sunshine Coast",
        "deliveryinfo": "<a href ='https://brickerscider.com/shop/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.812235,
          49.478736
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "The Fraser Valley Cider Company",
        "deliveryarea": "Lower Mainland",
        "deliveryinfo": "<a href='mailto:courtney@fraservalleycider.ca'>Email Order</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.613367,
          49.0306
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "The Parkside Brewery",
        "deliveryarea": "Vancouver to Coquitlam",
        "deliveryinfo": "<a href ='https://www.theparksidebrewery.com/local-delivery-2/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.853174,
          49.278586
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Three Ranges Brewing Company",
        "deliveryarea": "Valemount",
        "deliveryinfo": "<a href ='https://threeranges.square.site/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.265469,
          52.832334
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Tinhouse Brewing",
        "deliveryarea": "Port Coquitlam area",
        "deliveryinfo": "<a href ='https://tinhousebrewing.square.site/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.734994,
          49.251258
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Torchlight Brewing Co",
        "deliveryarea": "West Kootenays",
        "deliveryinfo": "<a href='http://www.torchlightbrewing.com/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.295225,
          49.495637
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Townsite Brewing",
        "deliveryarea": "Sunshine Coast",
        "deliveryinfo": "<a href='shorturl.at/lOY15'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -124.553283,
          49.874031
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Trading Post Brewing",
        "deliveryarea": "Langley",
        "deliveryinfo": "<a href='http://www.tradingpostbrewing.com/store'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.667303,
          49.118497
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Trench Brewing",
        "deliveryarea": "Prince George",
        "deliveryinfo": "<a href ='https://trench-brewing.myshopify.com/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.733244,
          53.913431
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Twa Dogs Brewery",
        "deliveryarea": "Greater Victoria and Sooke",
        "deliveryinfo": "<a href ='https://victoriacaledonian.com/product-category/beer/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.389261,
          48.484588
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Twin Sails Brewing",
        "deliveryarea": "Tri-Cities",
        "deliveryinfo": "<a href ='https://store.twinsailsbrewing.com/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.850636,
          49.278546
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Ucluelet Brewing Co",
        "deliveryarea": "Ucluelet and Tofino",
        "deliveryinfo": "<a href='tel:250-726-0499'>250-726-0499</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -125.54884,
          48.94204
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "V2V Black Hops Brewing",
        "deliveryarea": "Greater Victoria",
        "deliveryinfo": "<a href ='https://v2vblackhopsbrewing.ca/shop/?v=4326ce96e26c'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.502399,
          48.464646
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Vancouver Island Brewing",
        "deliveryarea": "Greater Victoria",
        "deliveryinfo": "<a href ='https://vibrewing.com/shop/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.369873,
          48.434915
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Wheelhouse Brewing",
        "deliveryarea": "Prince Rupert",
        "deliveryinfo": "<a href='shorturl.at/wJQXY'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -130.322776,
          54.318001
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Whistle Buoy Brewing Company",
        "deliveryarea": "Greater Victoria",
        "deliveryinfo": "<a href ='https://www.whistlebuoybrewing.com/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.370776,
          48.428148
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "White Rock Beach Beer Company",
        "deliveryarea": "White Rock and South Surrey",
        "deliveryinfo": "<a href='tel:778-808-5416'>778-808-5416</a> or <a href='604-319-4378'>604-319-4378</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.804133,
          49.029448
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Whitetooth Brewing Company",
        "deliveryarea": "Golden and Area",
        "deliveryinfo": "<a href ='https://order.whitetoothbrewing.com/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.972512,
          51.30191
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Whistler Brewing",
        "deliveryarea": "Whistler",
        "deliveryinfo": "<a href='tel:604-962-8889'>604-962-8889</a> Extension 105"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.042354,
          50.088056
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Wildeye Brewing",
        "deliveryarea": "North Shore and Vancouver area",
        "deliveryinfo": "<a href ='https://www.wildeyebrewing.ca/beer-to-go'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.037154,
          49.305757
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Wolf Brewing Company",
        "deliveryarea": " Central Vancouver Island",
        "deliveryinfo": "<a href='http://www.wolfbrewingcompany.com/home-deliveries__trashed/home-delivery-order-form/'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.933417,
          49.141822
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Yellow Dog Brewing",
        "deliveryarea": "Greater Vancouver",
        "deliveryinfo": "<a href ='https://www.merch.yellowdogbrew.com/collections/beer'>Online Store</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.851052,
          49.278661
        ]
      }
    }
  ]
}];

//Initialising the map on the map page

navigator.geolocation.getCurrentPosition(function(location) {
  var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude); 
var mymap = L.map('mapid').setView(latlng, 13);
  
  new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            'attribution': 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
}).addTo(mymap);
L.geoJSON(someFeatures,{ 
   onEachFeature: function (feature, layer) {
    layer.bindPopup('<h1>'+feature.properties.name+'</h1><p>Delivery area: '+feature.properties.deliveryarea+'</p><p>'+feature.properties.deliveryinfo+'</p>');
  }
}).addTo(mymap);
  
});






  