checkSpeed();

function checkSpeed(speed) {
	const speedLimit = 70;
	const kmPerPoint = 5;
	const points = Math.floor((speed - speedLimit) / kmPerPoint);
	if (speed < speedLimit + kmPerPoint) {
		console.log('Youre good!');
		return;
	}
	if (points >= 12) {
		console.log('Your license is suspended!');
	} else {
		console.log('Demerit points: ' + points);
	}
}
