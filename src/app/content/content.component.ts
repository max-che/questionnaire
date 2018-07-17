import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService, Form } from '../shared/services/api.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

	public displayedColumns = ['date', 'title', 'description', 'respondent'];
	public dataSource: Observable<Form[]>;

	constructor(private api: ApiService) {}

	ngOnInit() {
		this.dataSource = this.api.getForms();
	}
}


