//FUNCTION DECLARATION

function walk() {
	console.log('walk');
}

//FUNCTION EXPRESSION - Sem nome = anonymous function
const run = function() {
	console.log('run');
};

let move = run;

run();
move();
