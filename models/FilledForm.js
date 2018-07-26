var mongoose = require('mongoose');

var FilledFormSchema = new mongoose.Schema({
	respondent: {
		name: String,
		department: String
	},
	title: String,
	description: String,
	parent: {
		parentId: String,
		alias: String,
		created: { type: Date }
	},
	fields: [
		{
			type: {type: String},
			choices: [String],
			name: String,
			description: String,
			value: [String],
			order: Number
		}
	],
	fillingDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('FilledForm', FilledFormSchema);
