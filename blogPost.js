// let post = {
// 	title: 'a',
// 	body: 'b',
// 	author: 'c',
// 	views: 5,
// 	comments: [
// 		{
// 			autor: 'r',
// 			body: 'o'
// 		}
// 	],
// 	isLive: true
// };

///////////

function Post(title, body, author) {
	(this.title = title),
		(this.body = body),
		(this.author = author),
		(this.views = 0),
		(this.comments = []),
		(this.isLive = false);
}

const post = new Post('a', 'b', 'c');

console.log(post);
