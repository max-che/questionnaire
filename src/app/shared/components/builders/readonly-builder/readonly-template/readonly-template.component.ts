import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-readonly-template',
	templateUrl: './readonly-template.component.html',
	styleUrls: ['./readonly-template.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ReadonlyTemplateComponent {
	public date: number = Date.now();

	@Input()
	public fields: Fields[];
}
