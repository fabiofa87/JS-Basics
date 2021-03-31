// const address = {
// 	street: 'a',
// 	city: 'Rio de Janeiro',
// 	zipcode: 'a'
// };

// showAddress(address);

// function showAddress(address) {
// 	for (let key in address) console.log(key, address[key]);
// }

// Constructor
// function Address(street, city, zipcode) {
// 	(this.street = street), (this.city = city), (this.zipcode = zipcode);
// }

// const address = new Address('a', 'b', 'c');

// console.log(address);

//Factory Function

function createAddress(street, city, zipcode) {
	return {
		street,
		city,
		zipcode
	};
}

// console.log(createAddress('a', 'b', 'c'));

// Or

const address = createAddress('a', 'b', 'c');
console.log(address);
