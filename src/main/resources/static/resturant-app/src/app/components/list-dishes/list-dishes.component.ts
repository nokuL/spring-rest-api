import { Component, OnInit } from '@angular/core';
import {Dish} from "../../models/dish";
import {DishService} from "../../shared_service/dish.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-dishes',
  templateUrl: './list-dishes.component.html',
  styleUrls: ['./list-dishes.component.css']
})
export class ListDishesComponent implements OnInit {
  private dishes:Dish[];


  constructor(private dishService:DishService , private router:Router) { }

  ngOnInit() {
    this.dishService.getDishes().subscribe((dishes)=>{
      console.log(this.dishes)
      this.dishes = dishes;
    },(error)=>{
      console.log(error);
    })
  }
  deleteDish(dish){
    this.dishService.deleteDish(dish.id).subscribe((data)=>{
      this.dishes.splice(this.dishes.indexOf(dish),1);
    } , (error)=>{
      console.log(error)
    })
  }
  updateDish(dish){
    this.dishService.setter(dish);
    this.router.navigate(['/editDish'])


  }
  createDish(){
     let dish = new Dish();
     this.dishService.setter(dish);
     this.router.navigate(['/editDish'])
  }


}
