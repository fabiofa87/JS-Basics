const courses = [
	{
		id: 1,
		name: 'b'
	},
	{
		id: 2,
		name: 'a'
	}
];

const course = courses.find(function(course) {
	return course.name === 'a';
});

console.log(course);

//or

///...findIndex(function(param))
