interface Field extends TemplateField {
	value: string[];
}

interface FilledForm {
	respondent: {
		name: string,
		department: string
	};
	title: string;
	description: string;
	parent: {
		parentId: string,
		alias: string,
		created: Date
	};
	fields: Field[];
	fillingDate: Date;
}
