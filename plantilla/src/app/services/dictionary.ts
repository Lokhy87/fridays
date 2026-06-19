import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DictionaryResponse } from '../models/dictionary.interface';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private http = inject(HttpClient);
  private baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en';

  public getWordData(word: string): Observable<DictionaryResponse[]> {
    return this.http.get<DictionaryResponse[]>(`${this.baseUrl}/${word}`);
  }
}