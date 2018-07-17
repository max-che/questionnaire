import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService, Form } from '../../../shared/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-filled-form-card',
	templateUrl: './filled-form-card.component.html',
	styleUrls: ['./filled-form-card.component.scss']
})
export class FilledFormCardComponent implements OnInit {

	public form: Form = null;

	public constructor(
		private route: ActivatedRoute,
		private API: ApiService,
		private el: ElementRef
	) {}

	public ngOnInit() {
		this.API.getForm(this.route.snapshot.params['formId'])
			.subscribe(data => {
				this.form = data;
			});
	}
}
