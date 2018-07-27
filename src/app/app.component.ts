import { Component, OnInit } from '@angular/core';
import { FilledFormsService } from './shared/services/filled-forms.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	private filledForms: Observable<FilledForm[]>;

	public constructor(private api: FilledFormsService) {}

	public ngOnInit(): void {
		this.filledForms = this.api.query();
	}
}
