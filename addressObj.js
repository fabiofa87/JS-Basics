const address = {
	street: 'a',
	city: 'Rio de Janeiro',
	zipcode: 'a'
};

showAddress(address);

function showAddress(address) {
	for (let key in address) console.log(key, address[key]);
}
