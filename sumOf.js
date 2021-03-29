console.log(sum(9));

function sum(limit) {
	const multiples = [ 3, 5, 6, 9, 10 ];
	let sum = 0;
	for (let i = 0; i < multiples.length; i++) {
		sum += multiples[i];
		if (multiples[i] === limit) {
			return sum;
		}
	}
}
