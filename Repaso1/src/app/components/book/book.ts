import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { Doc } from '../../models/book.interface';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book {
  @Input() book!: Doc;

  @Output() bookClicked = new EventEmitter<Doc>();
  @Output() closeBook = new EventEmitter<void>();

  public selectBook(): void {
    this.bookClicked.emit(this.book);
  }

  public closeModal(): void {
    this.closeBook.emit();
  }
  
  public defaultImage = 'https://creandoutopias.org/wp-content/uploads/2020/04/a-8.jpg';

  public getCoverUrl(): string {
    if (this.book.cover_i) {
      return `https://covers.openlibrary.org/b/id/${this.book.cover_i}-M.jpg`;
    } else {
      return this.defaultImage;
    }
  }
}
