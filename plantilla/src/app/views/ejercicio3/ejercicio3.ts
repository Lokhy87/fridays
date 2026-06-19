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
  public pokemonService = inject(PokemonService);

  // Array vacío e inicializado.
  public pokemonList: Pokemon[] = [];
  
  public selectedPokemon: Pokemon | null = null;
  public showModal: boolean = false;

  public ngOnInit(): void {
    // 3 llamadas rectas y directas. Sin condicionales, sin promesas, sin CD.
    this.pokemonService.getPokemonData('bulbasaur').subscribe((res) => {
      this.pokemonList.push(res);
    });

    this.pokemonService.getPokemonData('ditto').subscribe((res) => {
      this.pokemonList.push(res);
    });

    this.pokemonService.getPokemonData('pikachu').subscribe((res) => {
      this.pokemonList.push(res);
    });
  }

  public handleSelectPokemon(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
    this.showModal = true;
  }

  public handleCloseModal(): void {
    this.showModal = false;
  }

  public showAllCards(): void {
    this.selectedPokemon = null; // Reiniciamos la selección
  }
}