import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FilledFormsService } from '../../../shared/services/filled-forms.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-filled-form-card',
	templateUrl: './filled-form-card.component.html',
	styleUrls: ['./filled-form-card.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class FilledFormCardComponent implements OnInit {
	public form: FilledForm;

	public constructor(
		private route: ActivatedRoute,
		private API: FilledFormsService
	) {}

	public ngOnInit() {
		this.API.get(this.route.snapshot.params['formId']).subscribe(
			data => {
				this.form = data;
			}
		);
	}
}
