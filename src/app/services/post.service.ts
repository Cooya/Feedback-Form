import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
	private url: string;

	constructor(private http: Http) {
		this.url = 'http://private-e2353-js8.apiary-mock.com/posttoform';
	}

	postFeedback(data: any) {
		return this.http.post(this.url, data)
		.map(res => res.json());
	}
}