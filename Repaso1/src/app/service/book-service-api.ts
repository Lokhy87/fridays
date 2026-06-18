import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookResponse } from '../models/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookServiceApi {
  private http = inject(HttpClient); 
  public getBook(title: string): Observable<BookResponse> {
    return this.http.get<BookResponse> (
      `https://openlibrary.org/search.json?title=${title}`
    )
  }
}
