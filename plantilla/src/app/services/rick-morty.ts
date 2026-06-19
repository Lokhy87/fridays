// src/app/services/rick-morty.service.ts
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Episode } from '../models/episode.interface';
import { Character } from '../models/character.interface';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {
  // Cambiamos el constructor por la inyección moderna con inject
  private http = inject(HttpClient);
  private baseUrl = 'https://rickandmortyapi.com/api';

  public getEpisode(id: string): Observable<Episode> {
    return this.http.get<Episode>(`${this.baseUrl}/episode/${id}`);
  }

  public getCharacters(urls: string[]): Observable<Character[]> {
    if (!urls.length) {
      return new Observable(sub => sub.next([]));
    }
    
    // Extraemos las IDs de forma limpia para hacer una sola petición masiva
    const ids = urls.map(url => url.split('/').pop()).join(',');
    return this.http.get<Character[]>(`${this.baseUrl}/character/${ids}`);
  }
}