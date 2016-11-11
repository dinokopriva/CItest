const express = require('express');

const expressPromise = require('express-promise')();

global.app = express();

const root = require('./app/routes');

app.use(expressPromise);
app.use(root);

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`);
});
