import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {
  books: Array<any>;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://www.googleapis.com/books/v1/volumes?q=css&maxResults=40').subscribe(data => {

      this.books = data["items"];
      console.log('data', this.books);

    });
  }
}
