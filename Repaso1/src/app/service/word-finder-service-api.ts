import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WordFinderResponse } from '../models/word.interface';

@Injectable({
  providedIn: 'root',
})
export class WordFinderServiceApi {
  private http = inject(HttpClient);
  public getWord(word: string): Observable<WordFinderResponse[]> {
    return this.http.get<WordFinderResponse[]> (
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    )
  }
}
