import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilledFormsService } from '../../shared/services/filled-forms.service';

@Component({
	selector: 'app-filled-forms',
	templateUrl: './filled-forms.component.html',
	styleUrls: ['./filled-forms.component.scss']
})
export class FilledFormsComponent implements OnInit {
	public displayedColumns = ['date', 'title', 'description', 'respondent'];
	public dataSource: Observable<FilledForm[]>;

	constructor(private filledFormsApi: FilledFormsService) {}

	ngOnInit() {
		this.dataSource = this.filledFormsApi.query();
	}
}
