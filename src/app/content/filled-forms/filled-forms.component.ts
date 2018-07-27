import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { FilledFormsService } from '../../shared/services/filled-forms.service';
import { TemplateFormsService } from '../../shared/services/template-forms.service';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-filled-forms',
	templateUrl: './filled-forms.component.html',
	styleUrls: ['./filled-forms.component.scss']
})
export class FilledFormsComponent implements OnInit {
	public displayedColumns = ['date', 'title', 'description', 'respondent'];
	public dataSource: Observable<FilledForm[]>;

	constructor(
		private filledFormsApi: FilledFormsService,
		private templateFormsApi: TemplateFormsService
	) {}

	ngOnInit() {
		this.dataSource = forkJoin([
			this.filledFormsApi.query(),
			this.templateFormsApi.query()
		]).pipe(
			map(data => {
				const f = data[0];
				const t = data[1];
				const filledArr = [];
				const templatesObj = {};

				// converting array of templates to object - not to iterate each time
				t.forEach(template => {
					templatesObj[template._id] = template;
					delete template._id;
					delete template.created;
				});

				f.forEach(filled => {
					const tmp = templatesObj[filled.templateId];

					tmp.fields.forEach(field => {
						field.value = filled.fields[field.order];
					});
					filledArr.push({ ...filled, ...tmp });
				});

				return filledArr;
			})
		);
	}
}
