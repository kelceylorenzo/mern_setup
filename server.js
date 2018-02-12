const express = require('express');
const PORT = process.env.PORT || 9000;

const app = express();

app.get('/', (req, res) => {
	res.send('<h1>App is working!</h1>');
});

app.get('/test-route', (req, res) => {
	console.log('Where will you see me');
	res.send('<h1>Test route is working!</h1>');
});

app.listen(PORT, () => {
	console.log('App running on PORT:' + PORT);
});
