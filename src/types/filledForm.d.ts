interface Fields {
	type: string;
	choices: string[];
	name: string;
	description: string;
	value: string;
}

interface FilledForm extends Fields{
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
	fields: Fields[];
	fillingDate: Date;
}
