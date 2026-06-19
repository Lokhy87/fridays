import { Episode } from './episode.interface';
import { Character } from './character.interface';

export interface CardData {
  episode: Episode;
  characters: Character[];
}