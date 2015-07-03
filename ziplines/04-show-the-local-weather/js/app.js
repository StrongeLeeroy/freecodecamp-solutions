$(document).ready(function(){
	if (navigator.geolocation){
		var positionCoords = navigator.geolocation.getCurrentPosition(function(data){
			var positionCoords = {
				latitude: data.coords.latitude,
				longitude: data.coords.longitude
			}
			var jsonUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=' + positionCoords.latitude + '&lon=' + positionCoords.longitude;
			console.log(jsonUrl);
			$.getJSON(jsonUrl, function(weatherData){
				console.log(JSON.parse(weatherData));
			});
		});
	} else {
		console.error('Geolocation is unavailable in your browser.');
	}
});

function getLocation(position) {
	return {
		latitude: position.coords.latitude,
		longitude: position.coords.longitude
	};
}