import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DictionaryResponse } from '../../models/dictionary.interface';

@Component({
  selector: 'app-word',
  standalone: true,
  templateUrl: './word.html',
  styleUrl: './word.css'
})
export class Word {
  @Input() wordInfo!: DictionaryResponse;
  
  @Output() nextSearch = new EventEmitter<void>();
  @Output() prevSearch = new EventEmitter<void>();

  public displayMode: string = 'definitions';

  public setMode(mode: string): void {
    this.displayMode = mode;
  }

  public onNext(): void {
    this.nextSearch.emit();
  }

  public onPrev(): void {
    this.prevSearch.emit();
  }
}