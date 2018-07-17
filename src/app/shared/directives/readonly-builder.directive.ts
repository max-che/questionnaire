import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { Form } from '../services/api.service';

@Directive({
	selector: '[appReadonlyBuilder]'
})
export class ReadonlyBuilderDirective {
	constructor(
		private renderer: Renderer2,
		private elementRef: ElementRef
	) {}

	@Input()
	public set appReadonlyBuilder(form: Form) {
		const div = this.renderer.createElement('div');
		const text = this.renderer.createText('Hello world!');

		this.renderer.appendChild(div, text);
		this.renderer.appendChild(this.elementRef.nativeElement, div);
	}
}
