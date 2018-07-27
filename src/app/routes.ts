import { Route, Routes } from '@angular/router';
import { FilledFormsComponent } from './content/filled-forms/filled-forms.component';
import { FilledFormCardComponent } from './content/filled-forms/filled-form-card/filled-form-card.component';
import { ContentComponent } from './content/content.component';
import { TemplateFormsComponent } from './content/prepared-forms/template-forms.component';

const routes: Routes = [
	{
		path: 'some',
		component: ContentComponent,
		data: { title: 'Something' }
	},
	{
		path: 'filled',
		component: ContentComponent,
		data: { title: 'Filled Forms List' },
		children: [
			{
				path: '',
				component: FilledFormsComponent
			},
			{
				path: ':formId',
				component: FilledFormCardComponent
			}
		]
	},
	{
		path: 'prepared',
		component: ContentComponent,
		data: { title: 'Filled Forms List' },
		children: [
			{
				path: '',
				component: TemplateFormsComponent
			}
		]
	},
	{
		path: '',
		redirectTo: '/filled',
		pathMatch: 'full'
	}
];

export const appRoutes: Route[] = routes;
