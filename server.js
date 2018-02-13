const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 9000;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
	res.send('<h1>App is working! Now with Nodemon</h1>');
});

app.get('/test-route', (req, res) => {
	console.log('Where will you see me');
	res.send('<h1>Test route is working!</h1>');
});

app.get('/api/get-user', (req, res) => {
	res.send({ userName: 'bobthegreat', email: 'bob@mail.com', name: 'Bob' });
});

app.get('/api/get-articles', (req, res) => {
	res.send(['article', 'bunnies', 'kittens', 'foxes', 'red pandas']);
});

app.listen(PORT, () => {
	console.log('App running on PORT:' + PORT);
});
