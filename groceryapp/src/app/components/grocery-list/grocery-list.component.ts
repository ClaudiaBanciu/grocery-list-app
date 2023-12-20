import { Component , OnInit} from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

import { GroceryListService } from '../../services/grocery-list.service';

import { Grocery } from '../../models/Grocery';
import { tap } from "rxjs/operators";

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.scss'
})
export class GroceryListComponent implements OnInit {
  groceries$!: Observable<Grocery[]>;

  constructor(private groceryListervice: GroceryListService) {}

  ngOnInit(): void {
    this.groceries$ = this.fetchAll();
  }

  fetchAll(): Observable<Grocery[]> {
    return this.groceryListervice.fetchAll();
  }

  post(groceryItem: Partial<Grocery>): void {
    const item = (<string>groceryItem ).trim();
    if (!item) return;

    this.groceries$ = this.groceryListervice
      .post({ item })
      .pipe(tap(() => (this.groceries$ = this.fetchAll())));
  }

  update(id: number, newItem: Partial<Grocery>): void {
    const item = (<string>newItem).trim();
    if (!item) return;

    const newGrocery: Grocery = {
      id,
      item,
    };

    this.groceries$ = this.groceryListervice
      .update(newGrocery)
      .pipe(tap(() => (this.groceries$ = this.fetchAll())));
  }

  delete(id: number): void {
    this.groceries$ = this.groceryListervice
      .delete(id)
      .pipe(tap(() => (this.groceries$ = this.fetchAll())));
  }
}