var express = require('express');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 3000));
app.use('/', express.static(path.join(__dirname, '/lib/demo')));

app.listen(app.get('port'), function() {
	console.log('Demo running on: http://localhost:' + app.get('port') + '/');
});