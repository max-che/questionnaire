var mongoose = require('mongoose');

var FilledFormSchema = new mongoose.Schema({
	respondent: {
		name: String,
		department: String
	},
	title: String,
	description: String,
	templateId: String,
	fields: {
		String: []
	},
	fillingDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('FilledForm', FilledFormSchema);
