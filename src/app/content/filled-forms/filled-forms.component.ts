import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../shared/services/api.service';

@Component({
	selector: 'app-filled-forms',
	templateUrl: './filled-forms.component.html',
	styleUrls: ['./filled-forms.component.scss']
})
export class FilledFormsComponent implements OnInit {
	public displayedColumns = ['date', 'title', 'description', 'respondent'];
	public dataSource: Observable<FilledForm[]>;

	constructor(private api: ApiService) {}

	ngOnInit() {
		this.dataSource = this.api.getForms();
	}
}
