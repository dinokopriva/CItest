global.express = require('express');

const expressPromise = require('express-promise')();

global.app = express();

const root = require('./app/routes');

app.use(expressPromise);
app.use(root);

app.listen(3000, () => {
	console.log('Example app listening on port 3000!');
});
