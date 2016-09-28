$(document).ready(function(){

	$.getJSON("topspots.json", function(result){
		//console.log(result);
		$(result.topspots).each(function( key, val ) {
  		//console.log(val);
  		$("#table").append("<tr><td>" + val.name + "</td><td>" + val.description + "</td><td>" + "<a href=https://www.google.com/maps?q=" 
  			+ val.location[0] + "," + val.location[1] + "><button type='button' class= 'btn btn-primary'>Open in Google Maps</button></a>" + "</td></tr>");

  	});

	});

});

/*
Use the $.getJSON method to download the contents of topspots.json
Iterate through the top spots and create rows for each spot.
Create a link to the location using the longitude and latitude provided. 
(Example https://www.google.com/maps?q=33.09745,-116.99572)
To start/test your application - navigate to SanDiegoTopSpots in command line and run static . 
To start a web server that you can access by going to http://localhost:8080
*/