const express = require('express');
const path = require('path');
const app = express();

app.set('port', (process.env.PORT || 3000));
app.use('/', express.static(path.join(__dirname, '/lib/demo')));

app.listen(app.get('port'), () => {
	console.log('Demo running on: http://localhost:' + app.get('port') + '/');
});