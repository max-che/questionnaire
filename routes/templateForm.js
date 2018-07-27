var express    = require('express');
var router     = express.Router();
var TemplateForm = require('../models/TemplateForm.js');

/* GET ALL FORMS */
router.get('/template-forms', function(req, res, next) {
	TemplateForm.find(function (err, products) {
		if (err) return next(err);
		res.json(products);
	});
});

/* GET SINGLE FORM BY ID */
router.get('/template-forms/:id', function(req, res, next) {
	TemplateForm.findById(req.params.id, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

/* SAVE FORM */
router.post('/template-forms', function(req, res, next) {
	TemplateForm.create(req.body, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

/* UPDATE FORM */
router.put('/template-forms/:id', function(req, res, next) {
	TemplateForm.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

/* DELETE FORM */
router.delete('/template-forms/:id', function(req, res, next) {
	TemplateForm.findByIdAndRemove(req.params.id, req.body, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

module.exports = router;
