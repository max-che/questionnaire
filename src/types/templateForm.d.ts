interface TemplateField {
	type: string;
	choices: string[];
	name: string;
	description: string;
	order: number;
}

interface TemplateForm {
	_id: string;
	created: {
		by: string,
		date: Date
	};
	title: string;
	description?: string;
	alias: string;
	fields: TemplateField[];
}
