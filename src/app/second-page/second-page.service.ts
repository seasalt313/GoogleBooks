import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class SearchService {
    baseUrl: string = 'https://www.googleapis.com/books/v1/volumes?q=';
    queryUrl: string = 'search+';

    constructor(private http: HttpClient) { }

    search(terms: Observable<string>) {
        return terms.debounceTime(400)
            .distinctUntilChanged()
            .switchMap(term => this.searchEntries(term));
    }

    searchEntries(term) {
        return this.http
            .get(this.baseUrl + this.queryUrl + term + '&maxResults=40');
    }


}