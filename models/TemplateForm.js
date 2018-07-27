var mongoose = require('mongoose');

var TemplateFormSchema = new mongoose.Schema({
	title: String,
	description: String,
	alias: String,
	fields: [
		{
			type: {type: String},
			choices: [String],
			name: String,
			description: String,
			order: Number
		}
	],
	created: {
		by: String,
		date: { type: Date, default: Date.now }
	}
});

module.exports = mongoose.model('TemplateForm', TemplateFormSchema);
