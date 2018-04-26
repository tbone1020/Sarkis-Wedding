
// Countdown 	
$("#countdown").countdown("2017/08/04", function(event) {

	$(this).html(
		event.strftime(
		'<div class="col-xl-1 col-lg-1 col-md-3 col-3 offset-xl-4 offset-lg-4 offset-md-0 offset-0 timeWrap text-center">%D <div class="time-inc">days</div></div><div class="col-xl-1 col-lg-1 col-md-3 col-3 offset-md-0 offset-0 timeWrap text-center">%H <div class="time-inc">Hours</div></div><div class="col-xl-1 col-lg-1 col-md-3 col-3 offset-md-0 offset-0 timeWrap text-center">%M <div class="time-inc">Minutes</div></div><div class="col-xl-1 col-lg-1 col-md-3 col-3 offset-md-0 offset-0 timeWrap text-center">%S <div class="time-inc">Seconds</div></div>')
	);
});


// Google maps
function initMap() {
	var uluru = {lat: 34.4274322, lng: -119.704114};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		scrollwheel: false,
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