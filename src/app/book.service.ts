import {Injectable} from '@angular/core';
import {Book} from './book';
import {BOOKS} from './book-list';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  getBooks(): Observable<Book[]> {
    const books = of(BOOKS);
    this.messageService.add('BookService: fetched books');
    return books;
  }

  getBook(id: number): Observable<Book> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const book = BOOKS.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched book id=${id}`);
    return of(book);
  }

  constructor(private messageService: MessageService) {
  }

}
