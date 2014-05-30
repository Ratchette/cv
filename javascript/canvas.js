// 1) get object (canvas tag)
// 2) set parameters / properties for the canvas object
// 3) action (eg. make shape or line)

function makeCanvas(){
	// 1) get object (canvas tag)
	var canvas1 = document.getElementById('canvas1');
	var context1 = canvas1.getContext('2d');

	// 2) set properties
	context1.font = '40pt Arial';
	context1.fillStyle = 'DeepSkyBlue';	// colour of the font
	context1.strokeStyle = 'black';		// font outline colour

	// 3) set the action
	context1.fillText('Adventures!', 55, 150);
	context1.strokeText('Adventures!', 55, 150);

	/*************************************************/

	// 1) get object (canvas tag)
	var canvas2 = document.getElementById('canvas2');
	var context2 = canvas2.getContext('2d');

	// 2) set properties
	context2.fillStyle = '#FF0000';
	context2.strokeStyle = 'black';
	context2.lineWidth = 10;

	// 3) set the action
	context2.fillRect(45, 5, 135, 135); 
	context2.strokeRect(45, 5, 135, 135);
	context2.fillRect(200, 150, 135, 135);
	context2.strokeRect(200, 150, 135, 135);

	context2.fillStyle = '#666666';
	context2.fillRect(200, 0, 135, 135);
	context2.fillRect(45, 150, 135, 135);


	/*************************************************/

	// 1) get object (canvas tag)
	var canvas3 = document.getElementById('canvas3');
	var context3 = canvas3.getContext('2d');

	// 2) set properties
	context3.strokeStyle = '#666666';
	context3.fillStyle = '#FF0000';
	context3.lineWidth = 5;

	// 3) set the action
	context3.beginPath();
	context3.moveTo(100, 100);
	context3.lineTo(150, 200);
	context3.lineTo(200, 200);
	context3.lineTo(200, 290);
	context3.lineTo(290, 290);
	context3.lineTo(290, 100);
	context3.lineTo(100, 100);
	context3.stroke();
	context3.fill();
	context3.closePath();


	/*************************************************/

	// 1) get object (canvas tag)
	var canvas4 = document.getElementById('canvas4');
	var context4 = canvas4.getContext('2d');

	// 2) set properties
	context4.fillStyle = '#0000FF';

	// 3) set the action
	context4.beginPath();
	context4.arc(200, 30, 25, 0, Math.PI * 2);
	context4.fill();
	context4.closePath();

	context4.fillStyle = '#FF0000';
	context4.beginPath();
	context4.arc(200, 100, 45, 0, Math.PI * 2);
	context4.fill();
	context4.closePath();

	context4.fillStyle = '#000000';
	context4.beginPath();
	context4.arc(200, 220, 75, 0, Math.PI * 2);
	context4.fill();
	context4.closePath();

	/*************************************************/

	// 1) get object (canvas tag)
	var canvas5 = document.getElementById('canvas5');
	var context5 = canvas5.getContext('2d');

	// 2) set properties
	var counter = 0;
	setInterval(function(){
		var PI_2 = Math.PI * 2;

		context5.fillStyle = 'black';
		context5.fillRect(0, 0, canvas5.width, canvas5.height);

		// white circle
		context5.fillStyle = '#FFFFFF';
		context5.beginPath();
		context5.arc(-70 + counter, 120 + (counter / 7), 55, 0, PI_2);
		context5.fill();
		context5.closePath();

		// red circle
		context5.fillStyle = '#FF0000';
		context5.beginPath();
		context5.arc(150, -70 + counter, 55, 0, PI_2);
		context5.fill();
		context5.closePath();


		// blue circle 
		context5.fillStyle = '#0000FF';
		context5.beginPath();
		context5.arc(250 + (counter / 3) , -60 + counter, 55, 0, PI_2);
		context5.fill();
		context5.closePath();

		counter = counter + 1;
	}, 30);
}
