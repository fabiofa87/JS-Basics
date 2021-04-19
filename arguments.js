// function sum() {
// 	let total = 0;
// 	for (let value of arguments) total += value;
// 	return total;
// }

//REST OPERATOR

function sum(discount, ...prices) {
	const total = prices.reduce((a, b) => a + b);
	return total * (1 - discount);
}

console.log(sum(0.1, 4, 6, 7, 5, 12, 20));
