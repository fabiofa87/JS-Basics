const numbers = [ 1, 2, 3, 4, 5, 6, 20 ];
const max = getMax([]);

console.log(max);

function getMax(array) {
	if (array.length === 0) return undefined;
	console.log(Math.max(...array));
	// return array.reduce((accumulator, currentValue) => {
	// 	return Math.max(currentValue, accumulator[1]);
	// }, 0);
}
