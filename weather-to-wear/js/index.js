$(document).ready(function(){

	$.ajax({
		url: "http://api.openweathermap.org/data/2.5/weather?q=sanfrancisco,us&appid=de0167b3b4c301c0c2fbff5db7ab2156&units=imperial", 
		success: function(data) {
			console.log(data)
			// debugger;
			var temperature = data.main.temp;
			var description = data.weather[0].description;
			var iconCode = data.weather[0].icon;
			var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png"

			//access the icon value inside of data
			//concat the img url string with the icon value data
			//append that to the weather-api div inside of and img tag with the img url string as the src of the image
			$("#weather-api").append("<div class='weather' style='color: whitesmoke'>" + "Temperature is:" + temperature + "</div>"); 
			$("#weather-api").append("<div class='weather' style='color: whitesmoke'>" + "It appears to be "  + description + "</div>");
			$("#weather-api").append("<img src='" + iconUrl  + "'>");


		}
	})



});