import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const apiUrl = '/api/filled-forms';

@Injectable()
export class ApiService {
	constructor(private http: HttpClient) {}

	public getForms(): Observable<Form[]> {
		return this.http.get<Form[]>(apiUrl, httpOptions)
			.pipe(
				map(this.extractData),
				catchError(this.handleError)
			);
	}

	public getForm(id: string): Observable<Form> {
		const url = `${apiUrl}/${id}`;
		return this.http.get<Form>(url, httpOptions).pipe(
			map(this.extractData),
			catchError(this.handleError));
	}

	public postForm(data): Observable<Form> {
		return this.http.post<Form>(apiUrl, data, httpOptions)
			.pipe(
				catchError(this.handleError)
			);
	}

	public updateForm(data, id): Observable<Form> {
		return this.http.put<Form>(`${apiUrl}/${id}`, data, httpOptions)
			.pipe(
				catchError(this.handleError)
			);
	}

	public deleteForm(id: string): Observable<{}> {
		const url = `${apiUrl}/${id}`;
		return this.http.delete(url, httpOptions)
			.pipe(
				catchError(this.handleError)
			);
	}

	private extractData(res: Response) {
		return res || { };
	}

	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			// A client-side or network error occurred. Handle it accordingly.
			console.error('An error occurred:', error.error.message);
		} else {
			// The backend returned an unsuccessful response code.
			// The response body may contain clues as to what went wrong,
			console.error(
				`Backend returned code ${error.status}, ` +
				`body was: ${error.error}`);
		}
		// return an observable with a user-facing error message
		return throwError('Something bad happened; please try again later.');
	}
}

export interface Form {
	respondent: {
		name: string,
		department: string
	};
	title: string;
	description: string;
	parent: {
		parentId: string,
		alias: string,
		created: Date
	};
	fields: [
		{
			type: string,
			choices: string[],
			name: string,
			description: string,
			value: string
		}
	];
	fillingDate: Date;
}
