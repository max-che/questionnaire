var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');

var apiRouter = [
	require('./routes/filledForm'),
	require('./routes/templateForm')
];

var app = express();

var mongoose = require('mongoose');

mongoose
	.connect(
		'mongodb://localhost:27017/questionnaire',
		{
			promiseLibrary: require('bluebird'),
			useNewUrlParser: true
		}
	)
	.then(() => console.log('connection successful'))
	.catch(err => console.error(err));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', express.static(path.join(__dirname, 'dist/questionnaire/')));
app.use('/api+', apiRouter);

/* HTML5 MODE */
app.all(/^((?!(html|\/api)).)*$/, function(req, res) {
	res.sendFile(path.join(__dirname, 'dist/questionnaire/index.html'))
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.sendStatus(err.status);
});

module.exports = app;
