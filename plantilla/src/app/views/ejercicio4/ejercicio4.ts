import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DictionaryService } from '../../services/dictionary';
import { DictionaryResponse } from '../../models/dictionary.interface';
import { Word } from '../../components/word/word';

@Component({
  selector: 'app-ejercicio4',
  standalone: true,
  imports: [ReactiveFormsModule, Word],
  templateUrl: './ejercicio4.html',
  styleUrl: './ejercicio4.css'
})
export class Ejercicio4 {
  public dictionaryService = inject(DictionaryService);

  // Reactive Form Definition
  public searchForm = new FormGroup({
    word: new FormControl('', { nonNullable: true })
  });

  public searchHistory: DictionaryResponse[] = [];
  public currentIndex: number = -1;

  public onSubmit(): void {
    const wordToSearch = this.searchForm.getRawValue().word;
    
    if (!wordToSearch) {
      return;
    }

    this.dictionaryService.getWordData(wordToSearch).subscribe((response) => {
      if (response && response.length > 0) {
        // The API returns an array, we take the first item
        this.searchHistory.push(response[0]);
        this.currentIndex = this.searchHistory.length - 1;
      }
      // Clear the form after a successful search
      this.searchForm.reset();
    });
  }

  public goPrevious(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  public goNext(): void {
    if (this.currentIndex < this.searchHistory.length - 1) {
      this.currentIndex++;
    }
  }
}