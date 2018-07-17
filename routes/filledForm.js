var express    = require('express');
var router     = express.Router();
var mongoose   = require('mongoose');
var FilledForm = require('../models/FilledForm.js');

/* GET ALL FORMS */
router.get('/filled-forms', function(req, res, next) {
	FilledForm.find(function (err, products) {
		if (err) return next(err);
		res.json(products);
	});
});

/* GET SINGLE FORM BY ID */
router.get('/filled-forms/:id', function(req, res, next) {
	FilledForm.findById(req.params.id, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

/* SAVE FORM */
router.post('/filled-forms', function(req, res, next) {
	FilledForm.create(req.body, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

/* UPDATE FORM */
router.put('/filled-forms/:id', function(req, res, next) {
	FilledForm.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

/* DELETE FORM */
router.delete('/filled-forms/:id', function(req, res, next) {
	FilledForm.findByIdAndRemove(req.params.id, req.body, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

module.exports = router;
