import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../../models/pokemon.interface';

@Component({
  selector: 'app-poke-card',
  standalone: true,
  imports: [],
  templateUrl: './poke-card.html',
  styleUrl: './poke-card.css'
})
export class PokeCard {
  @Input() pokemon!: Pokemon;
  @Output() selectPokemon = new EventEmitter<Pokemon>();

  public onCardClick(): void {
    this.selectPokemon.emit(this.pokemon);
  }
}