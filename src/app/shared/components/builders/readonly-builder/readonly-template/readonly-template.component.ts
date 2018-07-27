import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-readonly-template',
	templateUrl: './readonly-template.component.html',
	styleUrls: ['./readonly-template.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ReadonlyTemplateComponent implements OnInit {
	@Input()
	public fields: Field[];

	private sortByOrder(): void {
		if (!Array.isArray(this.fields)) {
			return;
		}

		this.fields.sort((a, b) => a.order - b.order);
	}

	public valueExists(field: Field, i: number): boolean {
		return field.value.indexOf(i.toString()) > -1;
	}

	public emulateReadonly() {
		return false;
	}

	public ngOnInit() {
		this.sortByOrder();
	}
}
