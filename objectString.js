const nome = {
	nome: 'fabio',
	idade: 33,
	casado: 'nicole',
	pets: 2
};

showProperties(nome);

function showProperties(obj) {
	for (let key in obj) {
		if (typeof obj[key] === 'string') {
			console.log(key, obj[key]);
		}
	}
}
