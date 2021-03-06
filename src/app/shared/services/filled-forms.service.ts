import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const apiUrl = '/api/filled-forms';

@Injectable()
export class FilledFormsService {
	constructor(private http: HttpClient) {}

	public query(): Observable<FilledForm[]> {
		return this.http.get<FilledForm[]>(apiUrl, httpOptions)
			.pipe(
				map(this.extractData),
				catchError(this.handleError)
			);
	}

	public get(id: string): Observable<FilledForm> {
		const url = `${apiUrl}/${id}`;
		return this.http.get<FilledForm>(url, httpOptions).pipe(
			map(this.extractData),
			catchError(this.handleError));
	}

	// TODO: сделать и добавить новый интерфейс для отправляемой формы
	public post(data): Observable<FilledForm> {
		return this.http.post<FilledForm>(apiUrl, data, httpOptions)
			.pipe(
				catchError(this.handleError)
			);
	}

	// TODO: сделать и добавить новый интерфейс для отправляемой формы
	public update(data, id): Observable<FilledForm> {
		return this.http.put<FilledForm>(`${apiUrl}/${id}`, data, httpOptions)
			.pipe(
				catchError(this.handleError)
			);
	}

	public delete(id: string): Observable<{}> {
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
