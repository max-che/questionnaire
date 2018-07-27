import {
	AfterViewInit,
	ChangeDetectorRef,
	Component,
	ComponentFactory,
	ComponentFactoryResolver,
	ComponentRef, Input, OnDestroy,
	ViewChild,
	ViewContainerRef, ViewEncapsulation
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReadonlyTemplateComponent } from './readonly-template/readonly-template.component';
import { FilledFormsService } from '../../../services/filled-forms.service';

@Component({
	selector: 'readonly-builder',
	templateUrl: './readonly-builder.component.html',
	styleUrls: ['./readonly-builder.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ReadonlyBuilderComponent implements OnDestroy, AfterViewInit {

	@ViewChild('readonlyBuilder', {read: ViewContainerRef })
	public container;

	@Input()
	public form: FilledForm;

	public componentRef: ComponentRef<ReadonlyTemplateComponent>;

	public constructor(
		private route: ActivatedRoute,
		private API: FilledFormsService,
		private resolver: ComponentFactoryResolver,
		private cd: ChangeDetectorRef
	) {}

	private buildReadOnlyForm(fields) {
		this.container.clear();

		const factory: ComponentFactory<ReadonlyTemplateComponent> = this.resolver
			.resolveComponentFactory(ReadonlyTemplateComponent);
		this.componentRef = this.container.createComponent(factory);
		this.componentRef.instance.fields = fields;
	}

	public ngOnDestroy() {
		this.componentRef && this.componentRef.destroy();
	}

	public ngAfterViewInit() {
		if (!this.container) {
			return;
		}

		this.buildReadOnlyForm(this.form.fields);
		this.cd.detectChanges();
	}
}
