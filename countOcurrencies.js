const numbers = [ 1, 2, 3, 4, 5, 6, 1 ];
const count = countOcurrencies(numbers, 1);

console.log(count);
function countOcurrencies(array, searchElement) {
	// let count = 0;
	// for (let element of array) if (element === searchElement) count++;
	// return count;

	return array.reduce((accumulator, current) => {
		const ocurrence = current === searchElement;
		console.log(accumulator, current, searchElement);
		return accumulator + ocurrence;
	}, 0);
}
