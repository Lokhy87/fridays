import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { BookServiceApi } from '../../service/book-service-api';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Book } from '../../components/book/book';
import { Doc } from '../../models/book.interface';

@Component({
  selector: 'app-view1',
  imports: [ReactiveFormsModule, Book],
  templateUrl: './view1.html',
  styleUrl: './view1.css',
})
export class View1 {
  public bookService = inject(BookServiceApi);

  public books: Doc[] = [];
  public selectedBook!: Doc;
  public mode: 'form' | 'results' | 'modal' = 'form';
  private cdr = inject(ChangeDetectorRef);

  reactiveForm = new FormGroup({
    name: new FormControl('', { nonNullable: true }),
  });

  public onSubmit(): void {
    let data = this.reactiveForm.getRawValue();
    if (data.name != '') {
      this.bookService.getBook(data.name).subscribe((response) => {
        this.books = response.docs.slice(0, 5);
        this.mode = 'results';
        this.cdr.detectChanges();
      });
    }
    this.reactiveForm.reset();
  }

  public detail(book: Doc): void {
    this.selectedBook = book;
    this.mode = 'modal';
  }

  public returnResults(): void {
    this.mode = 'results';
  }

  public returnForm(): void {
    this.mode = 'form';
  }
}
