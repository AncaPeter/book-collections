import { Injectable } from '@angular/core';
import {Book} from './book';
import {BOOKS} from './book-list';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  getBooks(): Observable<Book[]> {
    const books = of(BOOKS);
    this.messageService.add('BookService: fetched books');
    return books;
  }

  constructor(private messageService: MessageService) { }
}
