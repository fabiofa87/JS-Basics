const array = [ 1, 0, NaN, '', 10, 5, 'Falsy' ];

console.log(countTruthy(array));

function countTruthy(array) {
	let count = 0;
	for (let value of array) {
		if (value) {
			count++;
		}
	}
	return count;
}
