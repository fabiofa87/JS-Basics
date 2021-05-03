const person = {
	firstName: 'Fabio',
	lastName: 'Faria',
	get fullName() {
		return `${this.firstName}, ${this.lastName}`;
	},
	set fullName(value) {
		const parts = value.split(' ');
		this.firstName = parts[0];
		this.lastName = parts[1];
	}
};

person.fullName = 'Nicole Aragao';

console.log(person);
