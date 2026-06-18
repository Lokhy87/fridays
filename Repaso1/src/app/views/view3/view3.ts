import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Text } from '../../components/text/text';
import { WordFinderServiceApi } from '../../service/word-finder-service-api';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Definition, Meaning } from '../../models/word.interface';

@Component({
  selector: 'app-view3',
  imports: [Text, ReactiveFormsModule],
  templateUrl: './view3.html',
  styleUrl: './view3.css',
})
export class View3 {
  public wordFinderService = inject(WordFinderServiceApi);

  public mode: 'form' | 'selection' | 'definition' | 'antonyms' | 'synonyms' = 'form';
  public definitions: Definition[] = [];
  public synonyms: string[] = [];
  public antonyms: string[] = [];
  public results: string[] = [];
  private cdr = inject(ChangeDetectorRef);

  reactiveForm = new FormGroup({
    name: new FormControl('', { nonNullable: true }),
  });

  public onSubmit(): void {
    let data = this.reactiveForm.getRawValue();
    if (data.name != '') {
      this.wordFinderService.getWord(data.name).subscribe((response) => {
        this.definitions = response[0].meanings[0].definitions;
        this.antonyms = response[0].meanings[0].antonyms;
        this.synonyms = response[0].meanings[0].synonyms;
        this.mode = 'selection';
                this.cdr.detectChanges();

      });
    }
    this.reactiveForm.reset();
  }

  public showDefinition(): void {
    this.results = this.definitions.map((d) => d.definition);
    this.mode = 'definition';
  }
  public showAntonyms(): void {
    this.results = this.antonyms;
    this.mode = 'antonyms';
  }
  public showSynonyms(): void {
    this.results = this.synonyms;
    this.mode = 'synonyms';
  }
  public returnResults(): void {
    this.mode = 'selection';
  }
  public newSearch(): void {
    this.mode = 'form';
  }
}
