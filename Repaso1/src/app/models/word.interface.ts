export interface WordFinderResponse {
  word: string;
  meanings: Meaning[];
}

export interface Meaning {
  definitions: Definition[];
  synonyms: string[];
  antonyms: any[];
}

export interface Definition {
  definition: string;
  synonyms: any[];
  antonyms: any[];
}
