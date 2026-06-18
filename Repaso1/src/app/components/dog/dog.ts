import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dog',
  imports: [],
  templateUrl: './dog.html',
  styleUrl: './dog.css',
})
export class Dog {
  @Input() selectedImage: string = '';

  @Output() imageClicked = new EventEmitter<string>();
  @Output() imageClosed = new EventEmitter<void>();

  public closeDetail(): void {
    return this.imageClosed.emit();
  }

  public detailImage(): void {
    return this.imageClicked.emit(this.selectedImage)
  }

  
  

}
