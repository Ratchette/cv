function showLocation(){
	if(navigator.geolocation){
		var timeoutVal = 10 * 1000 * 1000;

		navigator.geolocation.getCurrentPosition(
			displayPosition, 
			displayError,
			{enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0}
		);
	} else {
		alert('Your browser does not support geolocation.');
	}
}

function displayPosition(position){
	var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	var options = {
		zoom: 10,
		center: pos,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(document.getElementById('map'), options);
	var marker = new google.maps.Marker({
		position: pos, 
		map: map,
		title: 'Your Location'
	});
	var contentString = '<b>Timestamp:</b>' + parseTimestamp(position.timestamp) + 
		'</br><b>User location: </b>lat ' + position.coords.latitude + ' long ' +
		position.coords.longitude + ', accuracy ' + position.coords.accuracy;
	var infoWindow = new google.maps.InfoWindow({
		content: contentString
	});

	google.maps.event.addListener(marker, 'click', function(){
		infoWindow.open(map, marker);
	});
}

function displayError(error){
	var errors = {
		1: 'Permission Denied',
		2: 'Position Unavailable',
		3: 'Request Timeout'
	};

	alert('Error: ' + errors[error.code]);
}

function parseTimestamp(timestamp){
	var d = new Date(timestamp);
	var day = d.getDate();
	var month = d.getMonth() + 1;
	var year = d.getFullYear();
	var hours = d.getHours();
	var mins = d.getMinutes();
	var secs = d.getSeconds();
	var msec = d.getMilliseconds();

	return day + '.' + month + '.' + year + ' ' + hours + ':' + mins + ':' + secs + '.' + msec;
}