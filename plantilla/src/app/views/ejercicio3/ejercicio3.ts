import { Component, inject, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon';
import { PokeCard } from '../../components/poke-card/poke-card';
import { Modal } from '../../components/modal/modal';
import { Pokemon } from '../../models/pokemon.interface';

@Component({
  selector: 'app-ejercicio3',
  standalone: true,
  imports: [PokeCard, Modal],
  templateUrl: './ejercicio3.html',
  styleUrl: './ejercicio3.css'
})
export class Ejercicio3 implements OnInit {
  public data = inject(PokemonService);

  public pokemonList: Pokemon[] = [];
  public selectedPokemon: Pokemon | null = null;
  public showModal: boolean = false;

  public getResponse(): void {
    this.data.getPokemonData('bulbasaur').subscribe((response) => {
      this.pokemonList.push(response);
    });

    this.data.getPokemonData('ditto').subscribe((response) => {
      this.pokemonList.push(response);
    });

    this.data.getPokemonData('pikachu').subscribe((response) => {
      this.pokemonList.push(response);
    });
  }

  public ngOnInit(): void {
    this.getResponse();
  }

  public handleSelectPokemon(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
    this.showModal = true;
  }

  public handleCloseModal(): void {
    this.showModal = false;
  }

  public showAllCards(): void {
    this.selectedPokemon = null;
  }
}