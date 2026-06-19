// src/app/components/card/card.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Episode } from '../../models/episode.interface';
import { Character } from '../../models/character.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class CardComponent {
  @Input() episode!: Episode;
  @Input() characters: Character[] = [];
  @Input() index = 0; // El índice del personaje actual del carrusel

  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  onNext() { this.next.emit(); }
  onPrev() { this.prev.emit(); }
  onClose() { this.close.emit(); }
}