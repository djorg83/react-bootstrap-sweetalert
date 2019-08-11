process.title = 'Demo Server';

const express = require('express');
const path = require('path');
const app = express();

app.use('/assets', express.static(path.join(__dirname, '/assets')));
app.use('/demo/assets', express.static(path.join(__dirname, '/assets')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/assets/index.html'));
});

app.get('/js/demo.bundle.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/demo.bundle.js'));
});

app.listen(3000, () => console.log(`Demo running on: http://localhost:3000`));