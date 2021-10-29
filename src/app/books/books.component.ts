import { Component, OnInit } from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  book: Book = {
    id: 1,
    name: '7 Habits of Highly Effective People'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
