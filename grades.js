const notas = [ 80, 75, 95 ];

console.log(calculateGrades(notas));

function calculateGrades(notas) {
	const average = calculateAvg(notas);

	if (average < 60) return 'F';
	if (average < 70) return 'D';
	if (average < 80) return 'C';
	if (average < 90) return 'B';
	return 'A';
}

function calculateAvg(array) {
	let sum = 0;
	for (let value of array) {
		sum += value;
	}

	return sum / array.length;
}
