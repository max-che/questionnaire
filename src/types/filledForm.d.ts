interface Field extends TemplateField {
	value: string[];
}

interface FilledForm {
	_id: string;
	respondent: {
		name: string,
		department?: string
	};
	alias?: string;
	templateId: string;
	fields: Field[];
	fillingDate: Date;
}
