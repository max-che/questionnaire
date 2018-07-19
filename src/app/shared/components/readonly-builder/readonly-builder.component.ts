import { Component, Input, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
	selector: 'app-readonly-builder',
	templateUrl: './readonly-builder.component.html',
	styleUrls: ['./readonly-builder.component.scss']
})
export class ReadonlyBuilderComponent implements OnInit {
	public date: number = Date.now();

	@Input()
	public fields: Fields[];

	constructor() {}

	ngOnInit() {}
}
