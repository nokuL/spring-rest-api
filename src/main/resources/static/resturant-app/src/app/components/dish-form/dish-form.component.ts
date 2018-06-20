import { Component, OnInit } from '@angular/core';
import {DishService} from "../../shared_service/dish.service";
import {Router} from "@angular/router";
import {Dish} from "../../models/dish";
import {DishCategoryService} from "../../shared_service/dish-category.service";
import {DishCategory} from "../../models/dish-category";

@Component({
  selector: 'app-dish-form',
  templateUrl: './dish-form.component.html',
  styleUrls: ['./dish-form.component.css']
})
export class DishFormComponent implements OnInit {
  private dish: Dish;
  private dishCategories: DishCategory[];

  constructor(private dishService:DishService , private router:Router , private dishCategoryService : DishCategoryService) { }

  ngOnInit() {
    this.dish = this.dishService.getter();
    this.dishCategoryService.getDishCategories().subscribe((dishCategories)=>{
      console.log(dishCategories)
      this.dishCategories= dishCategories;
    },(error)=>{
      console.log(error);
    })
  }

  processDishForm(){

    if(this.dish.id==undefined){
      this.dishService.createDish(this.dish).subscribe((dish)=>{
        console.log(dish);
        this.router.navigate(['/'])
      }, (error)=>{
        console.log(error)
      })
    }else {
      this.dishService.updateDish(this.dish).subscribe((dish)=>{
        console.log(dish);
        this.router.navigate(['/'])
      }, (error)=>{
        console.log(error)
      })

    }
  }

}
