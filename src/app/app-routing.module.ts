import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent} from './books/books.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {BookDetailComponent} from './book-detail/book-detail.component';


const routes: Routes = [
  {path: 'books-collection', component: BooksComponent},
  {path: 'home', component: DashboardComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'detail/:id', component: BookDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
