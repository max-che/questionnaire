import { BookEditComponent } from './book-edit/book-edit.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookComponent } from './book/book.component';
import { Route, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'books',
		component: BookComponent,
		data: { title: 'Book List' }
	},
	{
		path: 'book-details/:id',
		component: BookDetailComponent,
		data: { title: 'Book Details' }
	},
	{
		path: 'book-create',
		component: BookCreateComponent,
		data: { title: 'Create Book' }
	},
	{
		path: 'book-edit/:id',
		component: BookEditComponent,
		data: { title: 'Edit Book' }
	},
	{ path: '',
		redirectTo: '/books',
		pathMatch: 'full'
	}
];

export const appRoutes: Route[] = routes;
