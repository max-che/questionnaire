import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService, Book } from './shared/services/api.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
	title = 'app';

	private books: Book[];

	constructor(private api: ApiService) {}

	ngOnInit() {
		this.api.getBooks()
			.subscribe(res => {
				console.log(res);
				this.books = res;
			}, err => {
				console.log(err);
			});
	}
}
