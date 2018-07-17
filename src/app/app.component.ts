import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService, Form } from './shared/services/api.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
	private filledForms: Observable<Form[]>;

	public constructor(private api: ApiService) {}

	public ngOnInit(): void {
		this.filledForms = this.api.getForms();
	}
}
