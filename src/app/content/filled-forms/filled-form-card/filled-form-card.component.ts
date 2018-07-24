import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
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
		private API: ApiService
	) {}

	public ngOnInit() {
		this.API.getForm(this.route.snapshot.params['formId']).subscribe(
			data => {
				this.form = data;
			}
		);
	}
}
