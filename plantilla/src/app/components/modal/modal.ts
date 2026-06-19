// src/app/components/modal/modal.ts
import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Pokemon } from '../../models/pokemon.interface';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.css'
})
export class Modal implements OnChanges {
  @Input() pokemon!: Pokemon;
  @Output() closeModal = new EventEmitter<void>();

  public images: string[] = [];
  public currentIndex: number = 0;

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['pokemon'] && this.pokemon) {
      // Metemos los 4 tipos de sprites requeridos por el enunciado
      this.images = [
        this.pokemon.sprites.front_default,
        this.pokemon.sprites.back_default,
        this.pokemon.sprites.front_shiny,
        this.pokemon.sprites.back_shiny
      ];
      this.currentIndex = 0; 
    }
  }

  public nextImage(): void {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  public prevImage(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1;
    }
  }

  public onClose(): void {
    this.closeModal.emit();
  }
}