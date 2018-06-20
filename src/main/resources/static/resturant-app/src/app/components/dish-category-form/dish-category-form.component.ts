import { Component, OnInit } from '@angular/core';
import {DishCategoryService} from "../../shared_service/dish-category.service";
import {Router} from "@angular/router";
import {DishCategory} from "../../models/dish-category";

@Component({
  selector: 'app-dish-category-form',
  templateUrl: './dish-category-form.component.html',
  styleUrls: ['./dish-category-form.component.css']
})
export class DishCategoryFormComponent implements OnInit {
  private dishCategory: DishCategory

  constructor(private dishCategoryService : DishCategoryService , private router: Router) { }

  ngOnInit() {
    this.dishCategory = this.dishCategoryService.getter();
  }
  processDishCategory(){
    if(this.dishCategory.id==undefined){
      this.dishCategoryService.createDishCategory(this.dishCategory).subscribe((dishCategory)=>{
        console.log(dishCategory);
        this.router.navigate(['/dishCategories'])
      }, (error)=>{
        console.log(error)
      })
    }else{
      this.dishCategoryService.updateDishCategory(this.dishCategory).subscribe((dishCategory)=>{
        console.log(dishCategory);
        this.router.navigate(['/dishCategories'])
      }, (error)=>{
        console.log(error)
      })
    }
  }

}
