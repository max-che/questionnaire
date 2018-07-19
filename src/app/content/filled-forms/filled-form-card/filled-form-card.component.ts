import {
	AfterContentChecked,
	AfterContentInit, AfterViewChecked, AfterViewInit,
	Component,
	ComponentFactory,
	ComponentFactoryResolver, ComponentRef,
	OnDestroy,
	OnInit,
	ViewChild,
	ViewContainerRef
} from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { ReadonlyBuilderComponent } from '../../../shared/components/readonly-builder/readonly-builder.component';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
	selector: 'app-filled-form-card',
	templateUrl: './filled-form-card.component.html',
	styleUrls: ['./filled-form-card.component.scss']
})
export class FilledFormCardComponent implements OnInit, OnDestroy, AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked {

	@ViewChild('readonlyBuilder', {read: ViewContainerRef })
	public container;

	public form: FilledForm;
	public componentRef: ComponentRef<ReadonlyBuilderComponent>;

	public constructor(
		private route: ActivatedRoute,
		private API: ApiService,
		private resolver: ComponentFactoryResolver
	) {}

	private buildReadOnlyForm(fields) {
		this.container.clear();

		const factory: ComponentFactory<ReadonlyBuilderComponent> = this.resolver
			.resolveComponentFactory(ReadonlyBuilderComponent);
		this.componentRef = this.container.createComponent(factory);
		this.componentRef.instance.fields = fields;
	}

	public ngOnDestroy() {
		this.componentRef && this.componentRef.destroy();
	}

	public ngOnInit() {
		this.API.getForm(this.route.snapshot.params['formId'])
			.subscribe(data => {
				this.form = data;
				console.log('CONTAINER ONINIT', this.container);

			});
	}

	public ngAfterViewInit() {
		console.log('CONTAINER AFTERVIEWINIT', this.container);
	}

	public ngAfterContentInit() {
		console.log('CONTAINER AFTERCONTENTINIT', this.container);
	}

	public ngAfterContentChecked() {
		console.log('CONTAINER AFTERCONTENTCHEKED', this.container);
	}

	public ngAfterViewChecked() {
		console.log('CONTAINER AFTERVIEWCHEKED', this.container);
		if (!this.container) {
			return;
		}
		// this.buildReadOnlyForm(this.form.fields);
	}
}
