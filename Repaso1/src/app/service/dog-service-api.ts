import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DogResponse } from '../models/dog.interface';

@Injectable({
  providedIn: 'root',
})
export class DogServiceApi {
  private http = inject(HttpClient); 
  public getDogsImage(): Observable<DogResponse> {
    return this.http.get<DogResponse> (
      'https://dog.ceo/api/breeds/image/random/5'
    )
  }
}
