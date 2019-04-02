import { Component } from '@angular/core';
import { SearchService } from './second-page.service';
import { Subject } from 'rxjs/Subject';
import { AnimationQueryMetadata } from '@angular/animations';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss'],
  providers: [SearchService]
})
export class SecondPageComponent {
  books = [];
  searchTerm$ = new Subject<string>();
  breakpoint;

  constructor(private searchService: SearchService) {
    this.searchService.search(this.searchTerm$)
      .subscribe((results: any) => {
        this.books = results.items;
        console.log("results, ", this.books);

      });
  }
}


