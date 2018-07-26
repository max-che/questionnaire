import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-readonly-template',
	templateUrl: './readonly-template.component.html',
	styleUrls: ['./readonly-template.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ReadonlyTemplateComponent implements OnInit {
	@Input()
	public fields: Fields[];

	private sortByOrder(): void {
		if (!Array.isArray(this.fields)) {
			return;
		}

		this.fields.sort((a, b) => a.order - b.order);
	}

	public valueExists(field: Fields, i: string): boolean {
		return field.value.indexOf(i) > -1;
	}

	public emulateReadonly() {
		return false;
	}

	public ngOnInit() {
		this.sortByOrder();
	}
}
