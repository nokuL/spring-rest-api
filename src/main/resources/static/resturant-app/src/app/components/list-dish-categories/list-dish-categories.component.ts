import { Component, OnInit } from '@angular/core';
import {DishCategoryService} from "../../shared_service/dish-category.service";
import {Router} from "@angular/router";
import {DishCategory} from "../../models/dish-category";

@Component({
  selector: 'app-list-dish-categories',
  templateUrl: './list-dish-categories.component.html',
  styleUrls: ['./list-dish-categories.component.css']
})
export class ListDishCategoriesComponent implements OnInit {
   private dishCategories: DishCategory[]
  constructor(private dishCategoryService: DishCategoryService , private router: Router) { }

  ngOnInit() {
    this.dishCategoryService.getDishCategories().subscribe((dishCategories)=>{
    console.log(this.dishCategories)
    this.dishCategories = dishCategories;
    },
      (error)=>{
      console.log(error);
      }
  );

}


}
