/*
	Google maps api key: AIzaSyB73PQ6r4IRxUGKYkWzV4zP2Nux2Mt641w
*/

// Countdown 	
$("#countdown").countdown("2017/08/04", function(event) {

	$(this).html(
		event.strftime(
		'<div class="timeWrap">%D days</div><div class="timeWrap">%H Hours</div><div class="timeWrap">%M Minutes</div>')
	);
});


// Google maps
function initMap() {
	var uluru = {lat: 34.4274322, lng: -119.704114};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: uluru,
		mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.TOP_RIGHT
        }
	});
	var marker = new google.maps.Marker({
		position: uluru,
        animation: google.maps.Animation.DROP,
		map: map
	});
	map.panBy(-250, 0);
}
