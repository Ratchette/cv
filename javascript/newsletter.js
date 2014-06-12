function initNewsletterStorage(){
	function saveData(field){
		var fieldInfo = document.getElementById('newsletter-' + field);

		if(fieldInfo.value.length > 0){
				localStorage.setItem(field, fieldInfo.value);
		} else {
			// TESTING ONLY
			localStorage.removeItem(field);
		}
	}

	saveData('name');
	saveData('email');
	// alert('Name: ' + localStorage.getItem('name') + '\nEmail: ' + localStorage.getItem('email'));
}

function displayName(){
	var name = localStorage.getItem('name');

	if(name !== null){
		document.write('Welcome Back ' + name);
	}
}

function displayEmail(){
	var email = localStorage.getItem('email');

	if(email !== null){
		document.write('<p><strong>Subscribed Email:</strong> ' + email + '</p>');
	} else {
		document.write('<p>Subscribe to our Newsletter</p>');
	}
}

function clearStorage(){
	localStorage.clear();
	window.location.reload();
}
