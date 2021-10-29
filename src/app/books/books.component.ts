import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BOOKS} from '../book-list';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books = BOOKS;
  selectedBook: Book;

  onSelect(book: Book): void {
    this.selectedBook = book;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
