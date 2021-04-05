// const array1 = [ 1, 2, 3, 4, 5, 6 ];
// const array2 = [ 7, 8, 9, 10 ];

// const arrays = array1.concat(array2);
// console.log(arrays);

//SORTING ARRAYS

// const array1 = [
// 	{
// 		id: 1,
// 		name: 'Nicole'
// 	},
// 	{
// 		id: 2,
// 		name: 'fabio'
// 	}
// ];

// array1.sort(function(a, b) {
// 	const nameA = a.name.toLocaleLowerCase();
// 	const nameB = b.name.toLocaleLowerCase();
// 	if (nameA < nameB) return -1;
// 	if (nameA > nameB) return 1;
// 	return 0;
// });

// console.log(array1);

//TESTING ELEMENTS - EVERY AND SOME

//USE ...SOME() OR ...EVERY()

// const numbers = [ 1, 2, -1, 3, 4, 5 ];

// const atLeastOnePositive = numbers.some(function(value) {
// 	return value >= 0;
// });

// console.log(atLeastOnePositive);

//FILTERING

// const numbers = [ 1, 2, 3, -8, 20 ];

// const filtered = numbers.filter((n) => n >= 0);

// const items = filtered.map((n) => ({ value: n }));

// const items = numbers
// 	.filter((n) => n >= 0)
// 	.map((n) => ({ value: n }))
// 	.filter((obj) => obj.value > 10)
// 	.map((obj) => obj.value);

// console.log(items);

// REDUCING ARRAY

const numbers = [ 1, 2, 3, 4, 5, 6, 67, 7 ];

const sum = numbers.reduce((accumulator, currentValue) => {
	return accumulator + currentValue;
}, 0);

console.log(sum);
