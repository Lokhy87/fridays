// src/app/views/ejercicio2/ejercicio2.ts
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RickMortyService } from '../../services/rick-morty';
import { CardComponent } from '../../components/card/card';
import { Episode } from '../../models/episode.interface';
import { Character } from '../../models/character.interface';

interface SearchResult {
  episode: Episode;
  characters: Character[];
  currentIndex: number;
}

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [ReactiveFormsModule, CardComponent], // <-- Añadido ReactiveFormsModule
  templateUrl: './ejercicio2.html',
  styleUrl: './ejercicio2.css'
})

export class Ejercicio2 {
  showForm: boolean = true;
  history: SearchResult[] = [];

  // Definimos el FormGroup tal y como viene en tus apuntes de clase
  searchForm = new FormGroup({
    episodeId: new FormControl('', { nonNullable: true })
  });

  constructor(private rmService: RickMortyService) {}

  public onSubmit(): void {
    // Obtenemos los datos con getRawValue() como pide Paco Segura
    const data = this.searchForm.getRawValue();
    const id = data.episodeId.trim();

    if (!id) return;

    this.rmService.getEpisode(id).subscribe({
      next: (episode) => {
        this.rmService.getCharacters(episode.characters).subscribe({
          next: (charactersData) => {
            const characters = Array.isArray(charactersData) ? charactersData : [charactersData];
            
            this.history.unshift({
              episode: episode,
              characters: characters,
              currentIndex: 0
            });

            this.showForm = false;
            this.searchForm.reset(); // Limpiamos el input usando reset()
          }
        });
      },
      error: (err) => console.error('Episodio no encontrado', err)
    });
  }

  handleNext(item: SearchResult) {
    if (item.currentIndex < item.characters.length - 1) {
      item.currentIndex++;
    } else {
      item.currentIndex = 0;
    }
  }

  handlePrev(item: SearchResult) {
    if (item.currentIndex > 0) {
      item.currentIndex--;
    } else {
      item.currentIndex = item.characters.length - 1;
    }
  }

  handleClose() {
    this.showForm = true;
  }
}