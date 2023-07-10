import { Component, OnInit } from '@angular/core';

import { CategoriesService } from "../../../../core/services/categories.service";
import { Observable } from "rxjs";
import { Category } from "./../../../../core/models/category.model";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public categories$: Observable<Category[]>;

  constructor(
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.getAllInfo();
  }
  private getAllInfo() {
    this.categories$ = this.categoriesService.getAllCategories();
  }

}
