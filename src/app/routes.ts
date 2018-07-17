import { Route, Routes } from '@angular/router';
import { FilledFormsComponent } from './content/filled-forms/filled-forms.component';
import { FilledFormCardComponent } from './content/filled-forms/filled-form-card/filled-form-card.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
	{
		path: 'some',
		component: ContentComponent,
		data: { title: 'Something' }
	},
	{
		path: 'filled-forms',
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
		path: '',
		redirectTo: '/filled-forms',
		pathMatch: 'full'
	}
];

export const appRoutes: Route[] = routes;
