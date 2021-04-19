const numbers = [ 1, 2, 3, 4, 5, 6, 20 ];
const max = getMax(numbers);

console.log(max);
function getMax(array) {
	// if (array.length === 0) return undefined;
	// console.log(Math.max(...array));
	if (array.length === 0) return undefined;
	return array.reduce((a, b) => (b > a ? b : a));
}
