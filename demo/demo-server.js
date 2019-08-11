process.title = 'Demo Server';

const express = require('express');
const path = require('path');
const app = express();

app.use('/assets', express.static(path.join(__dirname, '/assets')));
app.use('/js', express.static(path.join(__dirname, '/dist')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, () => console.log(`Demo running on: http://localhost:3000`));