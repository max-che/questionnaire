import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TemplateFormsService } from '../../shared/services/template-forms.service';

@Component({
	selector: 'app-template-forms',
	templateUrl: './template-forms.component.html',
	styleUrls: ['./template-forms.component.scss']
})
export class TemplateFormsComponent implements OnInit {
	public displayedColumns = ['date', 'title', 'description', 'respondent'];
	public dataSource: Observable<TemplateForm[]>;

	constructor(private templateFormsApi: TemplateFormsService) {}

	ngOnInit() {
		this.dataSource = this.templateFormsApi.query();
	}
}
